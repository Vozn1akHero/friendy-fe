import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class Event {
  id: number;
  title: string;
  street: string;
  streetNumber: string;
  city: string;
  avatarPath: string;
  participantsAmount: number;
  currentParticipantsAmount: number;
  isUserParticipant: boolean;
  date: Date;

  constructor(
    id: number,
    title: string,
    street: string,
    streetNumber: string,
    city: string,
    avatar: string,
    participantsAmount: number,
    currentParticipantsAmount: number,
    isUserParticipant: boolean,
    date: Date
  ) {
    this.id = id;
    this.title = title;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.avatarPath = EnviromentVariables.fileHostBaseUrl + avatar;
    this.participantsAmount = participantsAmount;
    this.currentParticipantsAmount = currentParticipantsAmount;
    this.isUserParticipant = isUserParticipant;
    this.date = date;
  }
}
