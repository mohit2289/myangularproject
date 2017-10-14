import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { MohitComponent } from '../mohit/mohit.component';


const routes : Routes = [
   {path:'' , redirectTo : '/index' , pathMatch : 'full'  },
   {path : 'index' , component : MohitComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,  { enableTracing: true }) 
  ],
  declarations: [],
  exports : [RouterModule]
})
export class RoutingModule { }
