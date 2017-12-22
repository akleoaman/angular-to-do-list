import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemServService } from '../item-serv.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  constructor(private itemServService: ItemServService ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems(): void {
    this.itemServService.getItems()
      .subscribe(items => this.items = items.slice(1, 5));
  }

}
