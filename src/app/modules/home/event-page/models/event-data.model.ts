export default class EventDataModel {
  id: number;
  title: string;
  street: string;
  streetNumber: string;
  city: string;
  avatarPath: string;
  participantsAmount: number;
  currentParticipantsAmount: number;
  date: Date;

  constructor(id: number,
              title: string,
              street: string,
              streetNumber: string,
              city: string,
              avatar: string,
              participantsAmount: number,
              currentParticipantsAmount: number,
              date: Date) {
    this.id = id;
    this.title = title;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.avatarPath = "http://localhost:5000/" + avatar;
    this.participantsAmount = participantsAmount;
    this.currentParticipantsAmount = currentParticipantsAmount;
    this.date = date;
  }
}
