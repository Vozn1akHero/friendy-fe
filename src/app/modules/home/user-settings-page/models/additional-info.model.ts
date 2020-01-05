export default class AdditionalInfoModel {
  constructor(maritalStatusId: number, religionId: number, smokingAttitudeId: number, alcoholAttitudeId: number) {
    this.maritalStatusId = maritalStatusId;
    this.religionId = religionId;
    this.smokingAttitudeId = smokingAttitudeId;
    this.alcoholAttitudeId = alcoholAttitudeId;
  }

  maritalStatusId: number;
  religionId: number;
  smokingAttitudeId: number;
  alcoholAttitudeId: number;
}
