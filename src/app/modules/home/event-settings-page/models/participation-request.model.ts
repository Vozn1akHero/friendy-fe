export class ParticipationRequestModel {
  id: number;
  issuerId: number;
  name: string;
  surname: string;
  avatar: string;

  constructor(id: number, issuerId: number,
              name: string, surname: string, avatar: string) {
    this.id = id;
    this.issuerId = issuerId;
    this.name = name;
    this.surname = surname;
    this.avatar = "http://localhost:5000/"+avatar;
  }
}
