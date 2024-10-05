import { IsEnum } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending',
  })
  status: 'pending' | 'in progress' | 'completed';
}
