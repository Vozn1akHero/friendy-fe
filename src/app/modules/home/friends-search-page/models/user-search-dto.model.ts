import UserInterestModel from './user-interest.model';

export default class UserSearchModel {
  name: string;
  surname: string;
  city: string;
  educationId: number;
  school: string;
  university: string;
  birthdayMin: Date;
  birthdayMax: Date;
  genderId: number;
  maritalStatusId: number;
  religionId: number;
  alcoholOpinionId: number;
  smokingOpinionId: number;
  interests: UserInterestModel[];

  constructor(name: string,
              surname: string,
              city: string,
              education: number,
              school: string,
              university: string,
              birthdayMin: Date,
              birthdayMax: Date,
              genderId: number,
              maritalStatus: number,
              religion: number,
              alcoholOpinion: number,
              smokingOpinion: number,
              interests: UserInterestModel[]) {
    this.name = name;
    this.surname = surname;
    this.city = city;
    this.educationId = education;
    this.school = school;
    this.university = university;
    this.birthdayMin = birthdayMin;
    this.birthdayMax = birthdayMax;
    this.genderId = genderId;
    this.maritalStatusId = maritalStatus;
    this.religionId = religion;
    this.alcoholOpinionId = alcoholOpinion;
    this.smokingOpinionId = smokingOpinion;
    this.interests = interests;
  }
}
