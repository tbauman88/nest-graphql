import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn() id: string;

  @Column()
  title: string;

  @Column()
  phase: string;

  @Column('jsonb')
  warmup: any;

  @Column()
  program: string;

  @Column('boolean')
  completed: boolean;

  @Column('text')
  notes: string | null;
}
