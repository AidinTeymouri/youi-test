import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DataStorageService } from './shared/services/data-storage.service';
import { ResultService } from './result/result.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultComponent } from './result/result.component';
import { ResultListComponent } from './result/result-list/result-list.component';
import { ResultItemComponent } from './result/result-list/result-item/result-item.component';
import { ReadItemPipe } from './shared/pipes/read-item.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ResultComponent,
    ResultListComponent,
    ResultItemComponent,
    ReadItemPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ResultService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
