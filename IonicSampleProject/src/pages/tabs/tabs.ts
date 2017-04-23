import { Component } from '@angular/core';

import { ListPage } from '../list/list';
import { RssPage } from '../rss/rss';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;
  tab3Root = RssPage;

  constructor() {
  }
}
