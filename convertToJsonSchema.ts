import {
  CompletedConfig,
  DEFAULT_CONFIG,
  Definition,
  ObjectType,
  ObjectTypeFormatter,
} from "ts-json-schema-generator";
import {
  createProgram,
  createParser,
  SchemaGenerator,
  createFormatter,
} from "ts-json-schema-generator";
import fs from "fs";

function shouldIgnoreKey(key: string): boolean {
  return key === "constructor" || key.startsWith("_");
}

export class CustomFormatter extends ObjectTypeFormatter {
  protected override getObjectDefinition(type: ObjectType): Definition {
    const result = super.getObjectDefinition(type);
    if (!result.properties) {
      return result;
    }
    const filtered = {
      ...result,
      properties: Object.entries(result.properties).reduce(
        (acc, [key, value]) =>
          shouldIgnoreKey(key) ? acc : { ...acc, [key]: value },
        {}
      ),
      required: [],
    };
    return filtered;
  }
}

const config: CompletedConfig = {
  ...DEFAULT_CONFIG,
  path: "./fixedTsDefinitions/r44_fixed.d.ts",
  type: "document",
};

// We configure the formatter an add our custom formatter to it.
const formatter = createFormatter(
  config,
  (fmt, circularReferenceTypeFormatter) => {
    // If your formatter DOES support children, you'll need this reference too:
    fmt.addTypeFormatter(new CustomFormatter(circularReferenceTypeFormatter));
  }
);

const program = createProgram(config);
const parser = createParser(program, config);
const generator = new SchemaGenerator(program, parser, formatter, config);
const schema = generator.createSchema(config.type);
const outputPath = "output/jsonSchema.json";

const schemaString = JSON.stringify(schema, null, 2);
const processed = schemaString
  .replace(
    /"format": "date-time"/gi,
    `"pattern": "\\\\d{4}-\\\\d{2}-\\\\d{2}(T\\\\d{2}:\\\\d{2}:\\\\d{2}(\\\\.\\\\d{1,3})?(\\\\+\\\\d{2}:\\\\d{2})?Z?)?"`
  )
  .replace(/"type": "number"/gi, `"type": "string"`);

fs.writeFile(outputPath, processed, (err) => {
  if (err) throw err;
});
