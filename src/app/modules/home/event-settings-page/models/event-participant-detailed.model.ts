import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";
export default class EventParticipantDetailedModel {
  id: number;
  name: string;
  surname: string;
  avatarUrl: string;
  isAdmin: boolean;

  constructor(
    id: number,
    name: string,
    surname: string,
    avatarPath: string,
    isAdmin: boolean
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
    this.isAdmin = isAdmin;
  }
}
