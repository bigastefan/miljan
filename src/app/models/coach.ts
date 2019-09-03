import { AccountData } from './accountData';
import { PersonalData } from './personalData';

export class Coach {
    id: number;
    phoneNumber: string;
    accountData: AccountData;
    personalData: PersonalData;
    biography: string;

    constructor(id: number, phoneNumber: string, accountData: AccountData, personalData: PersonalData, biography: string) {
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.accountData = accountData;
        this.personalData = personalData;
        this.biography = biography;
    }
}
