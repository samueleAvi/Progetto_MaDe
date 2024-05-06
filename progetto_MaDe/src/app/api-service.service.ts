import { Attribute, Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IScuola } from './iscuola';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  Scuole!: IScuola[];
  Tecnici!: IScuola[];
  Professionali!: IScuola[];
  Licei!: IScuola[];
  token: string = "c7ec6545bed81b6db5d7c9ee5839c3fbdba2977d4b90b8fe6c11f5399462c64b16abf2e56bee7f63b2b749cb2100a420e1093b5ccc1977438a650fdbc35a77f8018b915029021f806fd9a968decfe79303b6a87434df52c3fa24bb521f9ad03d772f08f5f6853f750224132fd1639894df90a81dbe2ee2275216c819ab9073f4";
  link = 'https://automatic-fiesta-g946gx9gpq7cp9w5-1337.app.github.dev/api/';

  getScuole(endpoint: string) {
    return this.http.get<any>(this.link + endpoint + '?populate=*', { headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token) });
  }
  getScuolaByID(endpoint: string, id: number) {
    return this.http.get<any>(this.link + endpoint + '/' + id + '?populate=*', { headers: new HttpHeaders().set('Authorization', 'bearer ' + this.token) });
  }


  getTecnici(endpoint: string): any[] {
    this.Tecnici = [];
    this.getScuole(endpoint).subscribe((data) => {
      this.Scuole = data.data;
      this.Tecnici.push(this.Scuole[2]);
      this.Tecnici.push(this.Scuole[3]);
      this.Tecnici.push(this.Scuole[4]);
      console.log(this.Tecnici);
      return this.Tecnici;
    });
    return this.Tecnici;
  }
  getProfessionali(endpoint: string): any[] {
    this.Professionali = [];
    this.getScuole(endpoint).subscribe((data) => {
      this.Scuole = data.data;
      this.Professionali.push(this.Scuole[2]);
      this.Professionali.push(this.Scuole[6]);
      this.Professionali.push(this.Scuole[8]);
      this.Professionali.push(this.Scuole[9]);
      this.Professionali.push(this.Scuole[10]);


      return this.Professionali;
    });
    return this.Professionali;
  }
  getLicei(endpoint: string): any[] {
    this.Licei = [];
    this.getScuole(endpoint).subscribe((data) => {
      this.Scuole = data.data;
      this.Licei.push(this.Scuole[0]);
      this.Licei.push(this.Scuole[1]);
      this.Licei.push(this.Scuole[5]);
      this.Licei.push(this.Scuole[7]);

      return this.Licei;
    });
    return this.Licei;
  }

  
}
