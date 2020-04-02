import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export class ParticipationRequestModel {
  id: number;
  issuerId: number;
  name: string;
  surname: string;
  avatar: string;

  constructor(
    id: number,
    issuerId: number,
    name: string,
    surname: string,
    avatar: string
  ) {
    this.id = id;
    this.issuerId = issuerId;
    this.name = name;
    this.surname = surname;
    this.avatar = EnviromentVariables.fileHostBaseUrl + avatar;
  }
}
