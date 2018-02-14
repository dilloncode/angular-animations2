import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HowtoComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
