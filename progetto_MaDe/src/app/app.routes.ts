import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TecniciComponent } from './tecnici/tecnici.component';
import { ProfessionaliComponent } from './professionali/professionali.component';
import { LiceiComponent } from './licei/licei.component';
import { DettagliComponent } from './dettagli/dettagli.component';

export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'professionali', component: ProfessionaliComponent},
    {path: 'licei', component: LiceiComponent},
    {path: 'tecnici', component: TecniciComponent},
    {path: 'dettagli', component: DettagliComponent},
    {path: 'dettagli/:id', component: DettagliComponent},
    {path: '**', component: HomeComponent},

];
