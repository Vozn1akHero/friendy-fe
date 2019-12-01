import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {retry, take} from 'rxjs/operators';
import BasicUserDataModel from '../models/basic-user-data.model';
import UserInterestModel from '../models/user-interest.model';
import EducationModel from '../models/education.model';
import AdditionalInfoModel from '../models/additional-info.model';

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

  constructor(private http: HttpClient){}

  getLoggedInUserData(){
    this.http.get(`api/user/logged-in/extended`, {observe: 'body'})
      .pipe(take(1), retry(3)).subscribe((res:any) => {
        this.userBasicData = new BasicUserDataModel(res.name, res.surname, res.birthday);
        this.userInterests = [...res.userInterests
          .map(value => new UserInterestModel(value.id, value.title))];
        this.userEducation = new EducationModel(res.educationId, res.university, res.school);
        //this.userEducation = new EducationModel(res.education.id, res.education.title);
        this.userAdditionalInfo = new AdditionalInfoModel(res.familyStatusId,
          res.religionId,
          res.smokingAttitudeId,
          res.alcoholAttitudeId);
        this.loaded = true;
    })
  }
}
