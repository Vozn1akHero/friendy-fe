import { EnviromentVariables } from "@app/shared/helpers/EnviromentVariables";

export default class ExemplaryPhotoModel {
  photoUrl: string;

  constructor(path: string) {
    this.photoUrl = EnviromentVariables.fileHostBaseUrl + path;
  }
}
