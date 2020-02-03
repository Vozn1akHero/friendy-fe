export default class NewEventDataModel {
  id: number;
  title: string;
  description: string;
  street: string;
  streetNumber: string;
  city: string;
  participantsAmount: number;
  date: Date;
  hour: number;
  minute: number;
  entryPrice: number;

  constructor(id: number,
              title: string,
              description: string,
              street: string,
              streetNumber: string,
              city: string,
              participantsAmount: number,
              date: Date,
              hour: number,
              minute: number,
              entryPrice: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.participantsAmount = participantsAmount;
    this.date = date;
    this.hour = hour;
    this.minute = minute;
    this.entryPrice = entryPrice;
  }
}
