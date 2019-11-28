import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, take} from 'rxjs/operators';
import ReceivedFriendRequestModel from '../models/received-friend-request.model';
import SentFriendRequestModel from '../models/sent-friend-request.model';
import {BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FriendRequestsModalService {
  private _modalOpened = new BehaviorSubject(false);

  private _sentFriendRequests = new BehaviorSubject([]);
  private _sentFriendRequestsLoaded = new BehaviorSubject(false);

  private _receivedFriendRequests = new BehaviorSubject([]);
  private _receivedFriendRequestsLoaded = new BehaviorSubject(false);

  public set modalOpened(value: boolean){
    this._modalOpened.next(value);
  }

  public get modalOpened(){
    return this._modalOpened.getValue();
  }

  public get modalOpened$(){
    return this._modalOpened.asObservable();
  }

  public set sentFriendRequests(sentFriendRequests : SentFriendRequestModel[]){
    this._sentFriendRequests.next(sentFriendRequests);
  }

  public get sentFriendRequests$(){
    return this._sentFriendRequests.asObservable();
  }

  private set sentFriendRequestsLoaded(value : boolean){
    this._sentFriendRequestsLoaded.next(value);
  }

  public get sentFriendRequestsLoaded$(){
    return this._sentFriendRequestsLoaded.asObservable();
  }


  public set receivedFriendRequests(receivedFriendRequests : ReceivedFriendRequestModel[]){
    this._receivedFriendRequests.next(receivedFriendRequests);
  }

  public get receivedFriendRequests$(){
    return this._receivedFriendRequests.asObservable();
  }

  private set receivedFriendRequestsLoaded(value: boolean){
    this._receivedFriendRequestsLoaded.next(value);
  }

  public get receivedFriendRequestsLoaded$(){
    return this._receivedFriendRequestsLoaded.asObservable();
  }


  constructor(private http: HttpClient){}

  getSentFriendRequests(){
    return this.http.get(`api/friend/requests/sent`, {observe: 'body'})
      .pipe(take(1)).subscribe((response : any[]) => {
        let sentFriendRequests: SentFriendRequestModel[] = [];
        response.map((value : any) => {
          const sentFriendRequest = new SentFriendRequestModel(value.receiverId,
            value.name,
            value.surname,
            value.avatarPath,
            value.requestId);
          sentFriendRequests.push(sentFriendRequest);
        });
        this.sentFriendRequests = sentFriendRequests;
        this.sentFriendRequestsLoaded = true;
      })
  }

  getReceivedFriendRequests(){
    return this.http.get(`api/friend/requests/received`, {observe: 'body'})
      .pipe(take(1)).subscribe((response : any[]) => {
        let receivedFriendRequests: ReceivedFriendRequestModel[] = [];
        response.map((value : any) => {
          const receivedFriendRequest = new ReceivedFriendRequestModel(value.authorId,
            value.name,
            value.surname,
            value.avatarPath,
            value.requestId);
          receivedFriendRequests.push(receivedFriendRequest);
        });
        this.receivedFriendRequests = receivedFriendRequests;
        this.receivedFriendRequestsLoaded = true;
      })
  }
}
