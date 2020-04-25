import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Star } from '../domain/interfaces/star';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private http: HttpClient) { }

  getStar(id: string) {
    return this.http.get<Star>(environment.StarApiUrl + '/api/stars/' + id);
  }

  getStars() {
    return this.http.get<Star[]>(environment.StarApiUrl + '/api/stars');
  }

  getRandomStar() {
    return this.http.get<Star>(environment.StarApiUrl + '/api/random');
  }  

  removeStar(id: string) {
    return this.http.delete<Star>(environment.StarApiUrl + '/api/stars/' + id)
  }

  createStar(star: any) {
    return this.http.post<Star>(environment.StarApiUrl + '/api/stars', star)
  }

  createStarImage(id: string, imagem: FormData) {
    return this.http.post<any>(environment.StarApiUrl + '/api/stars/' + id + '/photo', imagem)
  }

  patchStar(id: any, star: any) {
    return this.http.patch<Star>(environment.StarApiUrl + '/api/stars/' + id, star)
  }
}