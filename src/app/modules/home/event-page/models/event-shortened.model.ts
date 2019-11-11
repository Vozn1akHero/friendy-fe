export default class EventShortened {
  id: number;
  title: string;
  street: string;
  streetNumber: string;
  city: string;
  participantsAmount: number;
  date: Date;
  avatarUrl: string;

  constructor(id: number,
              title: string,
              street: string,
              streetNumber: string,
              city: string,
              participantsAmount: number,
              date: Date,
              avatarPath: string) {
    this.id = id;
    this.title = title;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.participantsAmount = participantsAmount;
    this.date = date;
    this.avatarUrl = "http://localhost:5000/" + avatarPath;
  }
}
