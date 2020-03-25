import {
  Field,
  GraphQLISODateTime,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';
import { IWarmup } from '../warmup.interface';

@ObjectType()
@InputType('WarmupInput')
export class Warmup implements IWarmup {
  @PrimaryGeneratedColumn() id: number;
  @Field() name: string;
  @Field() videoUrl: string;
}

@ObjectType()
export class CreateWorkout {
  @Field(() => Int)
  readonly id?: number;

  @Field()
  readonly title: string;

  @Field()
  readonly phase: string;

  @Field(() => [Warmup])
  readonly warmup: IWarmup[];

  @Field()
  readonly program: string;

  @Field({ nullable: true })
  readonly completed?: boolean;

  @Field({ nullable: true })
  readonly notes?: string;

  @Field(() => GraphQLISODateTime)
  readonly created_at?: Date;

  @Field(() => GraphQLISODateTime)
  readonly updated_at?: Date;
}
