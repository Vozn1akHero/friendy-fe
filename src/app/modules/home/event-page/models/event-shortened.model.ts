export default class EventShortened {
  id: number;
  title: string;
  street: string;
  streetNumber: string;
  city: string;
  participantsAmount: number;
  date: Date;

  constructor(id: number,
              title: string,
              street: string,
              streetNumber: string,
              city: string,
              participantsAmount: number,
              date: Date) {
    this.id = id;
    this.title = title;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.participantsAmount = participantsAmount;
    this.date = date;
  }
}
