const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const fs = require("fs");

const schema = JSON.parse(fs.readFileSync("./output/jsonSchema.json", "utf8"));
const data = JSON.parse(fs.readFileSync("./output/c4.json", "utf8"));

const ajv = new Ajv({ allErrors: true, strictRequired: false });
addFormats(ajv);

const validate = ajv.compile(schema);
const isValid = validate(data);
if (isValid) {
  console.log("JSON is valid!");
} else {
  console.log(JSON.stringify(validate.errors, null, 2));
}
