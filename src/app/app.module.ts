import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MentoresComponent } from './components/mentores/mentores.component';

import { HttpClientModule} from '@angular/common/http';
import { MentorizadosComponent } from './components/mentorizados/mentorizados.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MentoresComponent,
    MentorizadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
