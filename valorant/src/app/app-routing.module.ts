import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { AgentsInfoScreenComponent } from './components/agents-info-screen/agents-info-screen.component';
import { MapsInfoScreenComponent } from './components/maps-info-screen/maps-info-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainScreenComponent },
  { path: 'agents', component: AgentsInfoScreenComponent },
  { path: 'maps', component: MapsInfoScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
