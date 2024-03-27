"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// schema.ts
const type_graphql_1 = require("type-graphql");
const ModelResolver_1 = require("../resolvers/ModelResolver");
const schema = (0, type_graphql_1.buildSchemaSync)({
    resolvers: [ModelResolver_1.ModelResolver],
    emitSchemaFile: true,
    nullableByDefault: true,
    validate: false
});
exports.default = schema;
