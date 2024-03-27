// ModelFilterInput.ts
import { InputType, Field } from 'type-graphql';
import { ObjectId } from 'mongodb';

@InputType()
export class ModelFilterInput {
  @Field(type => ObjectId, { nullable: true })
  id?: ObjectId; // Accept an array of ObjectId for querying

  @Field({ nullable: true })
  firstname?: string;

  @Field({ nullable: true })
  lastname?: string;

  @Field({ nullable: true })
  picture?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  dob?: Date;

  @Field({ nullable: true })
  profession?: string;

  @Field({ nullable: true })
  shoesize?: number;

  @Field({ nullable: true })
  hairColor?: string;

  @Field({ nullable: true })
  hairLength?: string;

  @Field({ nullable: true })
  waist?: number;

  @Field({ nullable: true })
  height?: number;

  @Field({ nullable: true })
  weight?: number;

  @Field(type => [String], { nullable: true })
  castings?: string[];
}
