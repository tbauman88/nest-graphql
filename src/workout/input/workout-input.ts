import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class WorkoutInput {
  @Field()
  readonly title: string;

  @Field()
  readonly phase: string;

  @Field(() => [String])
  readonly warmup: string[];

  @Field()
  readonly program: string;

  @Field({ nullable: true })
  readonly completed: boolean;

  @Field({ nullable: true })
  readonly notes: string;
}
