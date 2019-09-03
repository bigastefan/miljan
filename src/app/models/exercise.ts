import { MuscleGroup } from './muscleGroup';

export class Exercise {
  id: number;
  name: string;
  exerciseImagePath: string;
  muscleGroup: MuscleGroup;

  constructor(id: number, name: string, exerciseImagePath: string, muscleGroup: MuscleGroup) {
      this.id = id;
      this.name = name;
      this.exerciseImagePath = exerciseImagePath;
      this.muscleGroup = muscleGroup;
  }
}
