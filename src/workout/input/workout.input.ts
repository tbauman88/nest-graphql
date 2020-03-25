import { Field, InputType } from '@nestjs/graphql';
import { Movement, Warmup } from '../dto/create-workout.dto.';
import { IMovement } from '../interfaces/movement.interface';
import { IWarmup } from '../interfaces/warmup.interface';

@InputType()
export class WorkoutInput {
  @Field()
  readonly title: string;

  @Field()
  readonly phase: string;

  @Field(() => [Warmup])
  readonly warmup: IWarmup[];

  @Field(() => [Movement])
  readonly strength_movements: IMovement[];

  @Field(() => [Movement])
  readonly muscle_endurance: IMovement[];

  @Field()
  readonly program: string;

  @Field({ nullable: true })
  readonly completed: boolean;

  @Field({ nullable: true })
  readonly notes: string;
}
