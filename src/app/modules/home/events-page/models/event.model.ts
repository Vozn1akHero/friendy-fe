export default class Event {
  id?: number;
  title?: string;
  street?: string;
  streetNumber?: string;
  city?: string;
  avatar?: string;
  participantsAmount?: number;
  date?: Date;

  constructor(id: number, title: string, street: string, streetNumber: string, city: string, avatar: string, participantsAmount: number, date: Date) {
    this.id = id;
    this.title = title;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.avatar = "data:image/png;base64," + avatar;
    this.participantsAmount = participantsAmount;
    this.date = date;
  }
}
