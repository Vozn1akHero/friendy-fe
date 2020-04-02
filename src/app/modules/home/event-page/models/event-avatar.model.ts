import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables.ts";

export default class EventAvatar {
  avatarUrl: string;

  constructor(avatarPath: string) {
    this.avatarUrl = EnviromentVariables.fileHostBaseUrl + avatarPath;
  }
}
