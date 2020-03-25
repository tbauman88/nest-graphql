import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkout } from './dto/create-workout.dto.';
import { Workout } from './workout.entity';

@Injectable()
export class WorkoutService {
  constructor(
    @InjectRepository(Workout)
    private readonly WorkoutRepo: Repository<Workout>,
  ) {}

  async createWorkout(data: CreateWorkout): Promise<Workout> {
    let workout = new Workout();

    workout.title = data.title;
    workout.phase = data.phase;
    workout.warmup = data.warmup;
    workout.program = data.program;
    workout.completed = data.completed;
    workout.notes = data.notes;

    await this.WorkoutRepo.save(workout);

    return workout;
  }

  async getWorkouts(): Promise<Workout[]> {
    const workouts = await this.WorkoutRepo.find();
    return workouts;
  }

  async getWorkout(id: number): Promise<Workout> {
    return await this.WorkoutRepo.findOne(id);
  }

  async deleteWorkout(id: number): Promise<string> {
    await this.WorkoutRepo.delete(id);
    return 'Successfully deleted workout';
  }
}
