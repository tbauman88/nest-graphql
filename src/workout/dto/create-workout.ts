import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateWorkout {
  @Field(() => Int)
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

  @Field(() => GraphQLISODateTime)
  readonly created_at?: Date;

  @Field(() => GraphQLISODateTime)
  readonly updated_at?: Date;
}
