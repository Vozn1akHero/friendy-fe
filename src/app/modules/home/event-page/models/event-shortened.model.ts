export default class EventShortened {
  id: number;
  title: string;
  street: string;
  streetNumber: string;
  city: string;
  avatarUrl: string;
  backgroundUrl: string;
  participantsAmount: number;
  currentParticipantsAmount: number;
  date: Date;

  constructor(id: number,
              title: string,
              street: string,
              streetNumber: string,
              city: string,
              avatarPath: string,
              backgroundPath: string,
              participantsAmount: number,
              currentParticipantsAmount: number,
              date: Date) {
    this.id = id;
    this.title = title;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.avatarUrl = "http://localhost:5000/"+avatarPath;
    this.backgroundUrl = "http://localhost:5000/"+backgroundPath;
    this.participantsAmount = participantsAmount;
    this.currentParticipantsAmount = currentParticipantsAmount;
    this.date = date;
  }
}
