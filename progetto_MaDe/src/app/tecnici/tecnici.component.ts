import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiServiceService } from '../api-service.service';
import { OnInit } from '@angular/core';
import { DettagliComponent } from '../dettagli/dettagli.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnici',
  standalone: true,
  imports: [RouterLink, NavbarComponent, DettagliComponent],
  templateUrl: './tecnici.component.html',
  styleUrl: './tecnici.component.css'
})
export class TecniciComponent implements OnInit{

constructor(private api:ApiServiceService){};


scuole!:any[];
opendays!:any[];
item!:string;


ngOnInit(): void {
  this.scuole = this.api.getTecnici('scuolas');
  this.api.getScuole('open-days').subscribe((data) => {
    this.opendays = data.data;
    console.log(this.opendays);
    console.log(this.scuole);
  });

  
}


}
