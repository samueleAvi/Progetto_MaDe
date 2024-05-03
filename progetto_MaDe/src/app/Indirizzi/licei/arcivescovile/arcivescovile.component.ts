import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { OnInit } from '@angular/core';
import { ApiServiceService } from '../../../api-service.service';
@Component({
  selector: 'app-arcivescovile',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './arcivescovile.component.html',
  styleUrl: './arcivescovile.component.css'
})
export class ArcivescovileComponent implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  dataScuole: any;

  ngOnInit(): void {
    this.apiService.getScuole('scuolas').subscribe((data) => {
      this.dataScuole = data.data;
    });
  }

}
