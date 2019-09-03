export class ClientInformation {

    id: number;
    gender: string;
    weight: number;
    height: number;
    chestMeasurement: number;
    waistMeasurement: number;

    constructor(id: number, gender: string, weight: number, height: number, chestMeasurement: number, waistMeasurement: number) {
        this.id = id;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.chestMeasurement = chestMeasurement;
        this.waistMeasurement = waistMeasurement;
    }
}
