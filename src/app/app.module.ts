import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MohitComponent } from './mohit/mohit.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MohitComponent
  ],
  imports: [
    BrowserModule , RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
