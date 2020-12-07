import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopsListingComponent } from './workshops-listing/workshops-listing.component';


const routes: Routes = [
  { path: '', component: WorkshopsListingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
