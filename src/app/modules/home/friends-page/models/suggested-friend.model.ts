import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class SuggestedFriendModel {
  id: number;
  avatarUrl: string;
  name: string;
  surname: string;

  constructor(id: number, avatarPath: string, name: string, surname: string) {
    this.id = id;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
    this.name = name;
    this.surname = surname;
  }
}
