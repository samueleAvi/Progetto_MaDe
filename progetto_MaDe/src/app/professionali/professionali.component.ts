import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiServiceService } from '../api-service.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-professionali',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './professionali.component.html',
  styleUrl: './professionali.component.css'
})
export class ProfessionaliComponent {
  constructor(private api:ApiServiceService){};
  scuole!:any[];
  
  ngOnInit(): void {
    this.scuole = this.api.getProfessionali('scuolas');
  }
}
