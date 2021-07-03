import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders  } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { EstadisticosComponent } from './components/estadisticos/estadisticos.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  
    EstadisticosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
