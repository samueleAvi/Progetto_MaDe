import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService{

  constructor(private http: HttpClient) {}
  
  token : string = "c7ec6545bed81b6db5d7c9ee5839c3fbdba2977d4b90b8fe6c11f5399462c64b16abf2e56bee7f63b2b749cb2100a420e1093b5ccc1977438a650fdbc35a77f8018b915029021f806fd9a968decfe79303b6a87434df52c3fa24bb521f9ad03d772f08f5f6853f750224132fd1639894df90a81dbe2ee2275216c819ab9073f4";
  link = 'https://automatic-fiesta-g946gx9gpq7cp9w5-1337.app.github.dev/api/';

  getScuole(endpoint: string){
    return this.http.get<any>(this.link + endpoint, {headers: new HttpHeaders().set('Authorization','bearer ' + this.token)});
  }

}
