// index.ts
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { ModelResolver } from './resolvers/ModelResolver';
import { connectDatabase } from './utils/db';
import schema from './schema/schema';

async function main() {
  await connectDatabase();

  const server = new ApolloServer({ schema });
  const { url } = await server.listen();
  console.log("url : ",url);
  console.log(`Server ready at ${url}`);
}

main().catch(err => console.error(err));
