import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {
  private _asyncPush: Subject<void> = new Subject();
  private _reset$: Subject<void> = new Subject();

  get push$(): Observable<void> {
    return this._asyncPush.asObservable();
  }

  get reset$(): Observable<void> {
    return this._reset$.asObservable();
  }

  propagateReset(): void {
    this._reset$.next();
  }

  propagatePush(): void {
    this._asyncPush.next();
  }
}
