import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class EventAdminModel {
  id: number;
  name: string;
  surname: string;
  avatarUrl: string;
  isEventCreator: boolean;

  constructor(
    id: number,
    name: string,
    surname: string,
    avatarUrl: string,
    isEventCreator: boolean
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarUrl;
    this.isEventCreator = isEventCreator;
  }
}
