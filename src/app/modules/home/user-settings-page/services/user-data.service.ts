import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {map, retry, take} from 'rxjs/operators';
import BasicUserDataModel from '../models/basic-user-data.model';
import UserInterestModel from '../models/user-interest.model';
import EducationModel from '../models/education.model';
import AdditionalInfoModel from '../models/additional-info.model';
import UserSafetyModel from '../models/user-safety.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService{
  get loaded$() {
    return this._loaded.asObservable();
  }
  set loaded(value: boolean) {
    this._loaded.next(value);
  }
  private _loaded = new BehaviorSubject(false);

  private _userBasicData = new BehaviorSubject(null);
  private _userInterests = new BehaviorSubject(null);
  private _userEducation = new BehaviorSubject(null);
  private _userAdditionalInfo = new BehaviorSubject(null);
  private _userSafety = new BehaviorSubject(null);


  get userBasicData(): BasicUserDataModel {
    return this._userBasicData.getValue();
  }
  set userBasicData(value: BasicUserDataModel) {
    this._userBasicData.next(value);
  }
  get userBasicData$() {
    return  this._userBasicData.asObservable();
  }


  get userInterests(): UserInterestModel[] {
    return this._userInterests.getValue();
  }
  set userInterests(value: UserInterestModel[]) {
    this._userInterests.next(value);
  }
  get userInterests$() {
    return this._userInterests.asObservable();
  }


  get userEducation(): EducationModel {
    return this._userEducation.getValue();
  }
  set userEducation(value: EducationModel) {
    this._userEducation.next(value);
  }
  get userEducation$() {
    return  this._userEducation.asObservable();
  }


  get userAdditionalInfo(): AdditionalInfoModel {
    return this._userAdditionalInfo.getValue();
  }
  set userAdditionalInfo(value: AdditionalInfoModel) {
    this._userAdditionalInfo.next(value);
  }
  get userAdditionalInfo$() {
    return  this._userAdditionalInfo.asObservable();
  }

  get userSafety(): UserSafetyModel {
    return this._userSafety.getValue();
  }
  set userSafety(value: UserSafetyModel) {
    this._userSafety.next(value);
  }
  get userSafety$() {
    return this._userSafety.asObservable();
  }

  constructor(private http: HttpClient){}

  getLoggedInUserData(){
    this.http.get(`api/user/logged-in/extended`, {observe: 'body'})
      .pipe(take(1), retry(3)).subscribe((res:any) => {
        console.log(res)
        this.userBasicData = new BasicUserDataModel(res.id, res.name, res.surname, res.birthday);
        this.userInterests = [...res.userInterests
          .map(value => new UserInterestModel(value.id, value.title))];
        this.userEducation = new EducationModel(res.educationId);
        //this.userEducation = new EducationModel(res.education.id, res.education.title);
        this.userAdditionalInfo = new AdditionalInfoModel(res.maritalStatusId,
          res.religionId,
          res.smokingAttitudeId,
          res.alcoholAttitudeId);
        this.userSafety = new UserSafetyModel(res.email);
        this.loaded = true;
    })
  }

  updateEducationData(value: EducationModel){
    return this.http.post(`api/user-data-update/education/${this.userBasicData.id}`,
      { id: value.educationId }).pipe(map((res: HttpResponse<any>) => {
        this.userEducation = value;
    }))
  }

  updateBasicData(value: BasicUserDataModel){
    return this.http.post(`api/user-data-update/basic/${this.userBasicData.id}`,
      { name: value.name, surname: value.surname, birthday: value.birthday }).pipe(map((res: HttpResponse<any>) => {
        this.userBasicData = value;
    }))
  }

  updateAdditionalData(value: AdditionalInfoModel){
    return this.http.post(`api/user-data-update/additional/${this.userBasicData.id}`,
      { value }).pipe(map((res: HttpResponse<any>) => {
        this.userAdditionalInfo = value;
    }))
  }

  updateEmail(value: string){
    return this.http.post(`api/user-data-update/email/${this.userBasicData.id}`,
      { value }).pipe(map((res: HttpResponse<any>) => {
      this.userSafety.email = value;
    }))
  }

  updatePassword(value: string){
    return this.http.post(`api/user-data-update/password/${this.userBasicData.id}?newPassword=${value}`,
      { value });
  }
}
