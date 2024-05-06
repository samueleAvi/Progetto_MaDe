import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ApiServiceService } from '../api-service.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getScuole('scuolas').subscribe((data) => {

    this.apiService.getTecnici('scuolas');
    this.apiService.getLicei('scuolas');
    this.apiService.getProfessionali('scuolas');
    });
  }

}
