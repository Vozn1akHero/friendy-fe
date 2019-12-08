export default class EventAdminModel {
  id: number;
  name: number;
  surname: number;
  avatarUrl: string;
  isEventCreator: boolean;

  constructor(id: number, name: number, surname: number, avatarUrl: string, isEventCreator: boolean) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.avatarUrl = avatarUrl;
    this.isEventCreator = isEventCreator;
  }
}
