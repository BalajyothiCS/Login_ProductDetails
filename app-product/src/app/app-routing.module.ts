import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'productdetails/:id', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
