import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Auth } from '../domain/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  public signedin$: BehaviorSubject<Auth>;
  public currentUser: Observable<Auth>;

  constructor(private http: HttpClient) {
    this.signedin$ = new BehaviorSubject<Auth>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.signedin$.asObservable();
  }

  public get currentUserValue(): Auth {
    return this.signedin$.value;
  }
  
  signup(credentials: any) {
    return this.http.post<any>(environment.StarApiUrl + '/api/users', credentials).pipe(
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.signedin$.next(user)        
      })
    )
  }

  signin(credentials: any) {
    return this.http.post<Auth>(environment.StarApiUrl + '/api/users/login', credentials).pipe(
      tap((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.signedin$.next(user)   
      })
    )
  }

  logout() {
    return this.http.post<any>(environment.StarApiUrl + '/api/users/logout', {}).pipe(
      tap(() => {
        localStorage.removeItem('currentUser');
        this.signedin$.next(null)
      })
    )
  }
}
