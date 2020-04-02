import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export class BaseData {
  id: number;
  title: string;
  avatarUrl: string;

  constructor(id: number, title: string, avatarUrl: string) {
    this.id = id;
    this.title = title;
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarUrl;
  }
}
