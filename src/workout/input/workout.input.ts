import { Field, InputType } from '@nestjs/graphql';
import { Warmup } from '../dto/create-workout.dto.';
import { IWarmup } from '../warmup.interface';

@InputType()
export class WorkoutInput {
  @Field()
  readonly title: string;

  @Field()
  readonly phase: string;

  @Field(() => [Warmup])
  readonly warmup: IWarmup[];

  @Field()
  readonly program: string;

  @Field({ nullable: true })
  readonly completed: boolean;

  @Field({ nullable: true })
  readonly notes: string;
}
