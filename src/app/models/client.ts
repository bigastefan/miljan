import { AccountData } from './accountData';
import { PersonalData } from './personalData';
import { ClientInformation } from './clientInformation';
import { Coach } from './coach';

export class Client {
    id: number;
    phoneNumber: string;
    birthday: Date;
    accountData: AccountData;
    personalData: PersonalData;
    clientInformation: ClientInformation;
    coach: Coach;

    constructor(id: number, phoneNumber: string, birthday: Date, accountData: AccountData,
                personalData: PersonalData, clientInformation: ClientInformation, coach: Coach) {

        this.id = id;
        this.phoneNumber = phoneNumber;
        this.birthday = birthday;
        this.accountData = accountData;
        this.personalData = personalData;
        this.clientInformation = clientInformation;
        this.coach = coach;
    }
}
