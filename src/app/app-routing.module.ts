import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:sno', component: ItemDetailComponent },
  { path: 'items', component: ItemsComponent }
];

@NgModule({
 exports: [ RouterModule ],
 imports: [ RouterModule.forRoot (routes) ]
})

export class AppRoutingModule { }

