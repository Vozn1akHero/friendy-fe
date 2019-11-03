export default class UserSearchModelDto {
  Name: string;
  Surname: string;
  City: string;
  Education: number;
  School: string;
  University: string;
  AgeMin: number;
  AgeMax: number;
  Gender: number;
  MaritalStatus: number;
  Religion: number;
  AlcoholOpinion: number;
  SmokingOpinion: number;
  Interests: string[];

  constructor(Name: string,
              Surname: string,
              City: string,
              Education: number,
              School: string,
              University: string,
              AgeMin: number,
              AgeMax: number,
              Gender: number,
              MaritalStatus: number,
              Religion: number,
              AlcoholOpinion: number,
              SmokingOpinion: number,
              Interests: string[]) {
    this.Name = Name;
    this.Surname = Surname;
    this.City = City;
    this.Education = Education;
    this.School = School;
    this.University = University;
    this.AgeMin = AgeMin;
    this.AgeMax = AgeMax;
    this.Gender = Gender;
    this.MaritalStatus = MaritalStatus;
    this.Religion = Religion;
    this.AlcoholOpinion = AlcoholOpinion;
    this.SmokingOpinion = SmokingOpinion;
    this.Interests = Interests;
  }
}
