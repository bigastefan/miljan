import { Exercise } from './exercise';

export class MuscleGroup {
    id: number;
    name: string;
    muscleGroupImagePath: string;
    exercise: Exercise[];

    constructor(id: number, name: string, muscleGroupImagePath: string, exercise: Exercise[]) {
        this.id = id;
        this.name = name;
        this.muscleGroupImagePath = muscleGroupImagePath;
        this.exercise = [];
    }
}
