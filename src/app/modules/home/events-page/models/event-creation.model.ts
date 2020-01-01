export default class EventCreationModel {
  title: string;
  description: string;
  street: string;
  streetNumber: string;
  city: string;
  participantsAmount: number;
  date: Date;
  hour: number;
  minute: number;

  constructor(title: string, description: string, street: string, streetNumber: string, city: string, participantsAmount: number, date: Date, hour: number, minute: number) {
    this.title = title;
    this.description = description;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.participantsAmount = participantsAmount;
    this.date = date;
    this.hour = hour;
    this.minute = minute;
  }
}
