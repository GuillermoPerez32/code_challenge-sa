import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  first_name: string;

  @Column('text')
  last_name: string;

  @Column('text')
  email: string;

  @Column('int')
  age: number;

  @Column('text')
  grade: string;
}
