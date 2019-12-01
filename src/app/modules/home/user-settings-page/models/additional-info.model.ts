export default class AdditionalInfoModel {
  constructor(familyStatusId: number, religionId: number, smokingAttitudeId: number, alcoholAttitudeId: number) {
    this.familyStatusId = familyStatusId;
    this.religionId = religionId;
    this.smokingAttitudeId = smokingAttitudeId;
    this.alcoholAttitudeId = alcoholAttitudeId;
  }

  familyStatusId: number;
  religionId: number;
  smokingAttitudeId: number;
  alcoholAttitudeId: number;
}
