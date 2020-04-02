import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class CommonEventModel {
  id: number;
  title: string;
  street: string;
  streetNumber: string;
  city: string;
  avatarPath: string;
  isUserParticipant: boolean;
  participantsAmount: number;
  currentParticipantsAmount: number;
  date: Date;

  constructor(
    id: number,
    title: string,
    street: string,
    streetNumber: string,
    city: string,
    avatar: string,
    isUserParticipant: boolean,
    participantsAmount: number,
    currentParticipantsAmount: number,
    date: Date
  ) {
    this.id = id;
    this.title = title;
    this.street = street;
    this.streetNumber = streetNumber;
    this.city = city;
    this.avatarPath = EnviromentVariables.fileHostBaseUrl + avatar;
    this.isUserParticipant = isUserParticipant;
    this.participantsAmount = participantsAmount;
    this.currentParticipantsAmount = currentParticipantsAmount;
    this.date = date;
  }
}
