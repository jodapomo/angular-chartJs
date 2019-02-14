import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';
import { BarrasComponent } from './components/barras/barras.component';
import { DonaComponent } from './components/dona/dona.component';
import { RadarComponent } from './components/radar/radar.component';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent,
    BarrasComponent,
    DonaComponent,
    RadarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
