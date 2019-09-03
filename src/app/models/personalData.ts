export class PersonalData {
    id: number;
    name: string;
    surname: string;
    profileImagePath: string;

    constructor(id: number, name: string, surname: string, profileImagePath: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.profileImagePath = profileImagePath;
    }
}
