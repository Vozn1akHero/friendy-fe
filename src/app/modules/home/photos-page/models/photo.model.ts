import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class Photo {
  id: number;
  url: string;
  constructor(id: number, path: string) {
    this.id = id;
    this.url = EnviromentVariables.fileHostBaseUrl + path;
  }
}
