// ModelResolver.ts
import { Resolver, Query, Arg } from 'type-graphql';
import { ModelFilterInput } from '../schema/ModelFilterInput';
import { Model } from '../models/Model';
import { getConnection, FindManyOptions } from 'typeorm';

@Resolver()
export class ModelResolver {
  @Query(returns => [Model])
  async models(@Arg("filter", { nullable: true }) filter?: ModelFilterInput): Promise<Model[]> {
    let options: FindManyOptions<Model> = {}; 

    if (filter) {
      options.where = {};

      if (filter.id) {
        options.where.id = filter.id;
      }
    }

    const models = await getConnection().getRepository(Model).find(options);
    return models;
  }
}
