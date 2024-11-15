const { XMLParser } = require("fast-xml-parser");
const fs = require("fs");
const xml = fs.readFileSync("./xmlMessageExamples/c4.xml", "utf8");

function filterTypeProperty(node) {
  return Object.entries(node).reduce((acc, [key, value]) => {
    if (key === "type" && value.startsWith("ase:")) {
      return acc;
    }
    if (Array.isArray(value)) {
      acc[key] = value.map((av) => {
        if (av.stringValue) {
          return av.stringValue;
        } else {
          return filterTypeProperty(av);
        }
      });
    } else if (typeof value === "object") {
      acc[key] = filterTypeProperty(value);
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "",
  textNodeName: "content",
  ignoreDeclaration: true,
  numberParseOptions: {
    skipLike: /[0-9]/,
  },
  removeNSPrefix: true,
  isArray: (name) => {
    if (
      [
        "Event",
        "RoleAssignment",
        "Row",
        "Street",
        "BuildingOrPropertyName",
      ].includes(name)
    )
      return true;
    return false;
  },
  tagValueProcessor: (tagName, tagValue, jPath, hasAttributes) => {
    if (
      ![
        "Party",
        "Participant",
        "Code",
        "NMI",
        "BuildingOrPropertyName",
      ].includes(tagName)
    )
      return tagValue;
    if (tagName === "BuildingOrPropertyName") {
      return { stringValue: tagValue };
    }
    if (tagName === "NMI") {
      if (
        typeof tagValue === "string" &&
        !hasAttributes &&
        !jPath.includes("ReplicationBlock.Row")
      ) {
        return {
          content: tagValue,
        };
      } else {
        return tagValue;
      }
    }
    return {
      content: tagValue,
    };
  },
});
const result = parser.parse(xml);
const { Header, Transactions, ..._ } = result.aseXML;

const processedResult = {
  aseXML: { Header, Transactions: filterTypeProperty(Transactions) },
};

console.log(JSON.stringify(processedResult, null, 2));
