import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";
export default class EventPhoto {
  photoUrl: string;

  constructor(path: string) {
    this.photoUrl = EnviromentVariables.fileHostBaseUrl + path;
  }
}
