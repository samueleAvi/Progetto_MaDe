import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scuole = [
    "Liceo Fabio Filzi",
    "Arcivescovile",
    "Istituto Tecnico Tecnologico Marconi Rovereto",
    "Liceo Delle Arti Depero Rovereto",
    "Istituto Tecnico Superiore Fontana Rovereto",
    "Liceo Antonio Rosmini Rovereto",
    "Università degli Studi di Trento",
    "Alberghiero Rovereto",
    "Istituto Istruzione Superiore Don Milani Rovereto",
    "Opera Armida Barelli",
    "Polo Veronesi"
  ]


}
