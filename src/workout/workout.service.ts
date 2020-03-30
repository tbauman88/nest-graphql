import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWorkout } from './dto/create-workout.dto.';
import { WorkoutInput } from './input/workout.input';
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
    workout.strength_movements = data.strength_movements;
    workout.muscle_endurance = data.muscle_endurance;
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

  async updateWorkout(id: number, input: WorkoutInput): Promise<Workout> {
    const workout = await this.WorkoutRepo.findOne({ where: { id } });

    workout.title = input.title;
    workout.phase = input.phase;
    workout.warmup = input.warmup;
    workout.program = input.program;
    workout.strength_movements = input.strength_movements;
    workout.muscle_endurance = input.muscle_endurance;
    workout.completed = input.completed;
    workout.notes = input.notes;

    await this.WorkoutRepo.save(workout);

    return workout;
  }

  async deleteWorkout(id: number): Promise<string> {
    await this.WorkoutRepo.delete(id);
    return 'Successfully deleted workout';
  }
}
