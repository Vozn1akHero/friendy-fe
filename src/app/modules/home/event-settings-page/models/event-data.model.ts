export default class EventDataModel {
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
  avatarUrl: string;
  backgroundUrl: string;

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
              entryPrice: number,
              avatarUrl: string,
              backgroundUrl: string ) {
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
    this.avatarUrl = avatarUrl && "http://localhost:5000/" + avatarUrl;
    this.backgroundUrl = backgroundUrl && "http://localhost:5000/" +  backgroundUrl;
  }
}
