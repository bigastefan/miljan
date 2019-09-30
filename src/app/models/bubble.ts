import { Coach } from './coach';

export class Bubble {
    id: number;
    header: string;
    content: string;
    coach: Coach;

    constructor(id: number, header: string, content: string, coach: Coach) {
        this.id = id;
        this.header = header;
        this.content = content;
        this.coach = coach;
    }
}
