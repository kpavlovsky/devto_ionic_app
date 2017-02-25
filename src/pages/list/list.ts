import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';

import {ItemDetailsPage} from '../item-details/item-details';
import {FeedEntry} from '../../_models/feed-entry';
import {FeedService} from '../../_serivces/feed.service';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: FeedEntry;
  feeds: FeedEntry[];
  feedUrl: string = 'https%3A%2F%2Fdev.to%2Ffeed';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private feedService: FeedService) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


  }

  ionViewDidLoad() {
    this.refreshFeed();
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  private refreshFeed() {
    // Adds 1s of delay to provide user's feedback.
    this.feedService.getFeedContent(this.feedUrl).delay(1000)
      .subscribe(
        feed => this.feeds = feed.items,
        error => console.log(error));
  }
}
