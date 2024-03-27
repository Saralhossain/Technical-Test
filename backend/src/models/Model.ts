// Model.ts
import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb'; 

@Entity()
export class Model {
  @ObjectIdColumn()
  id: ObjectId | undefined; 

  @Column({ nullable: true })
  firstname?: string;

  @Column({ nullable: true })
  lastname?: string;

  @Column({ nullable: true })
  picture?: string;

  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  dob?: Date;

  @Column({ nullable: true })
  profession?: string;

  @Column({ nullable: true })
  shoesize?: number;

  @Column({ nullable: true })
  hairColor?: string;

  @Column({ nullable: true })
  hairLength?: string;

  @Column({ nullable: true })
  waist?: number;

  @Column({ nullable: true })
  height?: number;

  @Column({ nullable: true })
  weight?: number;

  @Column('simple-array', { nullable: true })
  castings?: string[];
}
