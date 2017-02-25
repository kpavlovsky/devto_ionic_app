import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { FeedService } from '../_serivces/feed.service';

@NgModule({
  declarations: [
    MyApp,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FeedService
  ]
})
export class AppModule {}
