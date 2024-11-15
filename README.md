# XML to JSON POC

This is a POC to transform from XML to JSON, with matching JSON Schema generated from the associated XML Schema (XSD)

We pull together a few tools to do this:

- `CXSD` converts the XSD schema to a set of Typescript type definitions. Unfortunately this doesn't fully
  support union types, so for the purposes of this POC we manually add the unions where necessary. This is simple as the types in the union are generated, we only need to specify which should be used. For example NMIStandingData is generated with only the BaseStandingData type and we must specify the union members: `NMIStandingData: ElectricityStandingData | GasStandingData;`
- From the Typescript type definitions, we generate a JSON schema using `ts-json-schema-generator`.
- We can then use `fast-xml-parser` to convert the XML example message to JSON. There are a few tweaks needed to match the generated JSON schema
- Finally, we can use `Ajv` to validate that the converted JSON matches and validates against the schema

By doing this we can show that the process of conversion can be fully automated, and a valid schema can be generated

## To Run the Example:

- `npm install` will install the required dependencies
- `npm run generate-ts` will generate TS definitions from the AseXML schema. This shows how it is generated
- `npm run generate-json-schema` will generate a JSON schema from the TS definitions in `fixedTsDefinitions` (these are with the union changes as described above)
- `npm run convert-xml-to-json` will convert the C4 example in `xmlMessageExamples` to JSON (under the `output` folder)
- `npm run validate-json-against-schema` will validate the generated JSON against the generated JSON schema
- `npm example` will just run all of the above to get a complete output
