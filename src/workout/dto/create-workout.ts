import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@ObjectType()
export class CreateWorkout {
  @Field(() => Int)
  @MinLength(3)
  readonly id?: number;

  @Field()
  readonly title: string;

  @Field()
  readonly phase: string;

  @Field()
  readonly warmup: string;

  @Field()
  readonly program: string;

  @Field({ nullable: true })
  readonly completed?: boolean;

  @Field({ nullable: true })
  readonly notes?: string;
}
