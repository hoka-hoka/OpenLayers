import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { SideBarComponent } from './modules/side-bar/side-bar.component';
import { MapComponent } from './modules/map/map.component';
import { ScaleLineComponent } from './modules/scale-line/scale-line.component';
import { MousePositionComponent } from './modules/mouse-position/mouse-position.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    ScaleLineComponent,
    MousePositionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
