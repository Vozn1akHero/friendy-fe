import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class EventBannedParticipantModel {
  id: number;
  name: string;
  surname: string;
  avatarUrl: string;

  constructor(id: number, name: string, surname: string, avatarPath: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
  }
}
