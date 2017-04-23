import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';

@Component({
    selector: 'page-rss',
    templateUrl: 'rss.html'
})
export class RssPage {

    items: any;

    constructor(public navCtrl: NavController, public http: Http) {
        this.http.get('https://stormit.pl/feed').map(res => res.text()).subscribe(data => {
            this.parseXML(data).then((data) => {
                this.items = data
            });
        });
    }


    parseXML(data) {
        return new Promise(resolve => {
            var arr = [],
                parser = new xml2js.Parser({
                    trim: true,
                    explicitArray: true
                });

            parser.parseString(data, function(err, result) {
                for (let i in result.rss.channel[0].item) {
                    var item = result.rss.channel[0].item[i];
                    arr.push({
                        title: item.title[0]
                    });
                }

                resolve(arr);
            });
        });
    }
}
