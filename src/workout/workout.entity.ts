import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IMovement } from './interfaces/movement.interface';
import { IWarmup } from './interfaces/warmup.interface';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  phase: string;

  @Column({ type: 'json', default: [] })
  warmup: IWarmup[];

  @Column({ type: 'json', default: [] })
  strength_movements: IMovement[];

  @Column({ type: 'json', default: [] })
  muscle_endurance: IMovement[];

  @Column()
  program: string;

  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn({ nullable: true })
  created_at: Date;

  @UpdateDateColumn({ nullable: true })
  updated_at: Date;
}
