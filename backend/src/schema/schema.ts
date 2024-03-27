// schema.ts
import { buildSchemaSync } from 'type-graphql';
import { ModelFilterInput } from './ModelFilterInput';
import { ModelResolver } from '../resolvers/ModelResolver';

const schema = buildSchemaSync({
  resolvers: [ModelResolver],
  emitSchemaFile: true,
  nullableByDefault: true,
  validate: false
});

export default schema;
