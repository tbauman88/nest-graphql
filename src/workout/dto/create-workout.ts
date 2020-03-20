import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateWorkout {
  @Field(type => Int)
  readonly id?: string;

  @Field()
  readonly title: string;

  @Field()
  readonly phase: string;

  @Field()
  readonly warmup: string;

  @Field()
  readonly program: string;

  @Field()
  readonly completed: boolean;

  @Field({ nullable: true })
  readonly notes: string;
}
