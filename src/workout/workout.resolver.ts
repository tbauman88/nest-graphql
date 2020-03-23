import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWorkout } from './dto/create-workout';
import { WorkoutInput } from './input/workout-input';
import { Workout } from './workout.entity';
import { WorkoutService } from './workout.service';

@Resolver(of => Workout)
export class WorkoutResolver {
  constructor(private readonly workoutService: WorkoutService) {}

  @Query(() => [CreateWorkout], { name: 'workouts' })
  async getWorkouts() {
    return this.workoutService.getWorkouts();
  }

  @Query(() => CreateWorkout, { name: 'workout' })
  async getWorkout(@Args('id') id: number) {
    return this.workoutService.getWorkout(id);
  }

  @Mutation(() => CreateWorkout)
  async createWorkout(@Args('data') data: WorkoutInput) {
    return this.workoutService.createWorkout(data);
  }

  @Mutation(() => String)
  async deleteWorkout(@Args('id') id: number) {
    return this.workoutService.deleteWorkout(id);
  }
}
