import {
  Field,
  GraphQLISODateTime,
  InputType,
  Int,
  ObjectType,
} from '@nestjs/graphql';
import { IMovement } from '../interfaces/movement.interface';
import { IWarmup } from '../interfaces/warmup.interface';

@ObjectType()
@InputType('WarmupInput')
export class Warmup implements IWarmup {
  @Field() name: string;
  @Field() videoUrl: string;
  @Field({ defaultValue: null }) notes?: string;
}

@ObjectType()
@InputType('MovementInput')
export class Movement implements IMovement {
  @Field() name: string;
  @Field() videoUrl: string;
  @Field() tempo: string;
  @Field() reps: string;
  @Field() rest: string;
  @Field({ defaultValue: null }) sets: string;
  @Field({ defaultValue: null }) notes?: string;
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

  @Field(() => [Movement])
  readonly strength_movements: IMovement[];

  @Field(() => [Movement])
  readonly muscle_endurance: IMovement[];

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
