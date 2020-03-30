import { Field, InputType } from '@nestjs/graphql';
import { Movement, Warmup } from '../dto/create-workout.dto.';
import { IMovement } from '../interfaces/movement.interface';
import { IWarmup } from '../interfaces/warmup.interface';

@InputType()
export class WorkoutInput {
  @Field()
  title: string;

  @Field()
  phase: string;

  @Field(() => [Warmup])
  warmup: IWarmup[];

  @Field(() => [Movement])
  strength_movements: IMovement[];

  @Field(() => [Movement])
  muscle_endurance: IMovement[];

  @Field()
  program: string;

  @Field({ nullable: true })
  completed: boolean;

  @Field({ nullable: true })
  notes: string;
}
