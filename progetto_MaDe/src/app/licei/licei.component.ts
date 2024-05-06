import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiServiceService } from '../api-service.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-licei',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './licei.component.html',
  styleUrl: './licei.component.css'
})
export class LiceiComponent {
  constructor(private api:ApiServiceService){};
  scuole!:any[];
  
  ngOnInit(): void {
    this.scuole = this.api.getLicei('scuolas');
  }
}
