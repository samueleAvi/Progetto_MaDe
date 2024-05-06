import { Attribute, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
@Component({
  selector: 'app-dettagli',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.css'
})
export class DettagliComponent implements OnInit {

  item!: number;
  opendays!: any[];
  scuole!:any[];

  constructor(private api: ApiServiceService, private route: ActivatedRoute) {};

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.item = params['id'];
    });

    this.api.getScuolaByID('scuolas', this.item).subscribe((data) => {
    this.scuole = data.data;


      this.opendays = data.data.attributes.open_days.data;
      console.log(this.opendays);

    });

  }

    
  
}
