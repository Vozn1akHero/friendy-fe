import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";

export default class EventBackground {
  backgroundUrl: string;

  constructor(backgroundPath: string) {
    this.backgroundUrl = EnviromentVariables.fileHostBaseUrl + backgroundPath;
  }
}
