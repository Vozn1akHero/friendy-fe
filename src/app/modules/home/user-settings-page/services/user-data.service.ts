import {Injectable} from '@angular/core';
import {BehaviorSubject, of, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, retry, take} from 'rxjs/operators';
import BasicUserDataModel from '../models/basic-user-data.model';
import UserInterestModel from '../models/user-interest.model';
import EducationModel from '../models/education.model';
import AdditionalInfoModel from '../models/additional-info.model';
import UserSafetyModel from '../models/user-safety.model';
import {InfoModalService} from '../../../../shared/components/info-modal/info-modal.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor(private http: HttpClient,
              private infoModalService: InfoModalService) {
  }

  get loaded$() {
    return this._loaded.asObservable();
  }

  private _loaded = new BehaviorSubject(false);

  set loaded(value: boolean) {
    this._loaded.next(value);
  }

  private _userBasicData = new BehaviorSubject(null);

  get userBasicData(): BasicUserDataModel {
    return this._userBasicData.getValue();
  }

  set userBasicData(value: BasicUserDataModel) {
    this._userBasicData.next(value);
  }

  private _userInterests = new BehaviorSubject(null);

  get userInterests(): UserInterestModel[] {
    return this._userInterests.getValue();
  }

  set userInterests(value: UserInterestModel[]) {
    this._userInterests.next(value);
  }

  private _userEducation = new BehaviorSubject(null);

  get userEducation(): EducationModel {
    return this._userEducation.getValue();
  }

  set userEducation(value: EducationModel) {
    this._userEducation.next(value);
  }

  private _userAdditionalInfo = new BehaviorSubject(null);

  get userAdditionalInfo(): AdditionalInfoModel {
    return this._userAdditionalInfo.getValue();
  }

  set userAdditionalInfo(value: AdditionalInfoModel) {
    this._userAdditionalInfo.next(value);
  }

  private _userSafety = new BehaviorSubject(null);

  get userSafety(): UserSafetyModel {
    return this._userSafety.getValue();
  }

  set userSafety(value: UserSafetyModel) {
    this._userSafety.next(value);
  }

  get userBasicData$() {
    return this._userBasicData.asObservable();
  }

  get userInterests$() {
    return this._userInterests.asObservable();
  }

  get userEducation$() {
    return this._userEducation.asObservable();
  }

  get userAdditionalInfo$() {
    return this._userAdditionalInfo.asObservable();
  }

  get userSafety$() {
    return this._userSafety.asObservable();
  }

  getLoggedInUserData() {
    this.http.get(`api/user/logged-in/extended`, {observe: 'body'})
      .pipe(take(1), retry(3)).subscribe((res: any) => {
      this.userBasicData = new BasicUserDataModel(res.id,
        res.name,
        res.surname,
        res.birthday,
        res.genderId);
      this.userInterests = [...res.userInterests
        .map(value => new UserInterestModel(value.id, value.title, value.wage))];
      this.userEducation = new EducationModel(res.educationId);
      //this.userEducation = new EducationModel(res.education.id, res.education.title);
      this.userAdditionalInfo = new AdditionalInfoModel(res.maritalStatusId,
        res.religionId,
        res.smokingAttitudeId,
        res.alcoholAttitudeId);
      this.userSafety = new UserSafetyModel(res.email);
      this.loaded = true;
    });
  }

  updateEducationData(value: EducationModel) {
    return this.http.put(`api/user-data-update/education`,
      {id: value.educationId}).pipe(map(() => {
      this.userEducation = value;
      this.infoModalService.openWithMessage('Dane zostały zmienione');
    }));
  }

  updateBasicData(value: BasicUserDataModel) {
    return this.http.put(`api/user-data-update/basic`,
      {name: value.name, surname: value.surname, birthday: value.birthday})
      .pipe(map(() => {
        this.userBasicData = value;
        this.infoModalService.openWithMessage('Dane zostały zmienione');
      }));
  }

  updateAdditionalData(value: AdditionalInfoModel) {
    return this.http.put(`api/user-data-update/additional`,
      {value}).pipe(map(() => {
      this.userAdditionalInfo = value;
      this.infoModalService.openWithMessage('Dane zostały zmienione');
    }));
  }

  updateEmail(value: string) {
    return this.http.put(`api/user-data-update/email`,
      {email: value}).pipe(map(() => {
      this.userSafety.email = value;
      this.infoModalService.openWithMessage('Email został zmieniony');
    }), catchError(_ => {
      console.log(123131);
      console.log(_);
        if(_.error === 'PREVIOUS PASSWORD IS NOT CORRECT'){
          this.infoModalService.openWithMessage('Stare hasło nie jest prawidłowe');
        }
        return throwError(_.error);
    }));
  }

  updatePassword(oldPassword: string, newPassword: string) {
    return this.http.put(`api/user-data-update/password`,
      {oldPassword, newPassword}).pipe(map(() => {
      this.infoModalService.openWithMessage('Hasło zostało zmienione');
    }));
  }
}
