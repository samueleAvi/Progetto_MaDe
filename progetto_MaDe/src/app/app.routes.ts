import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArcivescovileComponent } from './Indirizzi/licei/arcivescovile/arcivescovile.component';
import { DeperoComponent } from './Indirizzi/licei/depero/depero.component';
import { FilziComponent } from './Indirizzi/licei/filzi/filzi.component';
import { RosminiComponent } from './Indirizzi/licei/rosmini/rosmini.component';
import { SteamComponent } from './Indirizzi/licei/steam/steam.component';
import { AlberghieroComponent } from './Indirizzi/professionali/alberghiero/alberghiero.component';
import { BarelliComponent } from './Indirizzi/professionali/barelli/barelli.component'; 
import { DonMilaniComponent } from './Indirizzi/professionali/don-milani/don-milani.component';
import { UPTComponent } from './Indirizzi/professionali/upt/upt.component';
import { MarconiComponent } from './Indirizzi/tecnici/marconi/marconi.component';
import { FontanaComponent } from './Indirizzi/tecnici/fontana/fontana.component';
import { VeronesiComponent } from './Indirizzi/tecnici/veronesi/veronesi.component';

export const routes: Routes = [
    {path: 'navbar', component: NavbarComponent},
    {path: 'home', component: HomeComponent},
    {path: 'licei/arcivescovile', component: ArcivescovileComponent},
    {path: 'licei/depero', component: DeperoComponent},
    {path: 'licei/filzi', component: FilziComponent},
    {path: 'licei/rosmini', component: RosminiComponent},
    {path: 'licei/steam', component: SteamComponent},
    {path: 'professionali/alberghiero', component: AlberghieroComponent},
    {path: 'professionali/barelli', component: BarelliComponent},
    {path: 'professionali/don-milani', component: DonMilaniComponent},
    {path: 'professionali/upt', component: UPTComponent},
    {path: 'tecnici/marconi', component: MarconiComponent},
    {path: 'tecnici/fontana', component: FontanaComponent},
    {path: 'tecnici/veronesi', component: VeronesiComponent},
    {path: '**', component: HomeComponent}

];
