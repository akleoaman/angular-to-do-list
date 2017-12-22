import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ITEMS } from './items-mock';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemServService } from './item-serv.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ItemsearchComponent } from './itemsearch/itemsearch.component';

@NgModule({
declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    MessageComponent,
    DashboardComponent,
    ItemsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )

  ],
  providers: [ItemServService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
