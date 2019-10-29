export default class UserSearchModel {
  name: any;
  surname: any;
  city: any;
  education: any;
  school: any;
  university: any;
  ageMin: any;
  ageMax: any;
  gender: any;
  familyStatus: any;
  religion: any;
  alcoholOpinion: any;
  smokingOpinion: any;
  drugsOpinion: any;
  interests: any;

  constructor(name: any, surname: any, city: any, education: any, school: any, university: any, ageMin: any, ageMax: any, gender: any, familyStatus: any, religion: any, alcoholOpinion: any, smokingOpinion: any, drugsOpinion: any, interests: any) {
    this.name = name;
    this.surname = surname;
    this.city = city;
    this.education = education;
    this.school = school;
    this.university = university;
    this.ageMin = ageMin;
    this.ageMax = ageMax;
    this.gender = gender;
    this.familyStatus = familyStatus;
    this.religion = religion;
    this.alcoholOpinion = alcoholOpinion;
    this.smokingOpinion = smokingOpinion;
    this.drugsOpinion = drugsOpinion;
    this.interests = interests;
  }
}
