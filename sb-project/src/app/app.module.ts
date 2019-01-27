import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LuckyNumberGenComponent } from './lucky-number-gen/lucky-number-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    LuckyNumberGenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
