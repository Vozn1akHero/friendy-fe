import InterlocutorDataModel from './interlocutor-data.model';

export default class ChatData {
  id: number;
  firstInterlocutor: InterlocutorDataModel;
  secondInterlocutor: InterlocutorDataModel;

  constructor(id: number,
              firstInterlocutor: InterlocutorDataModel,
              secondInterlocutor: InterlocutorDataModel) {
    this.id = id;
    this.firstInterlocutor = firstInterlocutor;
    this.secondInterlocutor = secondInterlocutor;
  }
}
