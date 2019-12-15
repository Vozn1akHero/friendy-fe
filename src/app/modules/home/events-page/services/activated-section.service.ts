import {Injectable} from '@angular/core';
import {SectionType} from '../enums/section-type.enum';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivatedSectionService {
  private _activatedSection = new BehaviorSubject(SectionType.ParticipatingEvents);

  public setParticipatingSection(){
    this._activatedSection.next(SectionType.ParticipatingEvents);
  }

  public setAdministeredEvents(){
    this._activatedSection.next(SectionType.AdministeredEvents);
  }

  public setNonparticipatingEvents(){
    this._activatedSection.next(SectionType.NonparticipatingEvents);
  }

  public get activatedSection$(){
    return this._activatedSection.asObservable();
  }
}
