import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {path: 'home',component: PortafolioComponent },
  {path: 'about',component: AboutComponent },
  {path: 'item/:id',component: ItemComponent },
  {path: 'search/:termino',component: SearchComponent },
  {path: 'add',component: AddComponent },
  {path: '**',pathMatch:'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
