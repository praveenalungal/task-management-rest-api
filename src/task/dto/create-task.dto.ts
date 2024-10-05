import { IsNotEmpty, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsEnum(['pending', 'in progress', 'completed'])
  status: 'pending' | 'in progress' | 'completed';
}
