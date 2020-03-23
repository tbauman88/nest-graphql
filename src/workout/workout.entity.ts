import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Workout {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  phase: string;

  @Column('jsonb')
  warmup: any;

  @Column()
  program: string;

  @Column({ type: 'boolean', default: false })
  completed: boolean;

  @Column({ type: 'text', default: null })
  notes: string;
}
