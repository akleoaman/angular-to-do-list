import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../items-mock';
import { ItemServService } from '../item-serv.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {



 items: Item [];

  constructor(private itemServService: ItemServService)  {

} getItems(): void {
    this.itemServService.getItems()
        .subscribe(itemx => this.items = itemx);
   }
   add(task: string): void {
    task = task.trim();
    if (!item) { return; }
    this.itemServService.addItem({ task } as Item)
      .subscribe(item => {
        this.items.push(item);
      });
  }

  delete(item: Item): void {
    this.items = this.items.filter(h => h !== item);
    this.itemServService.deleteItem(item).subscribe();
  }
  ngOnInit() {
    this.getItems();
  }
}
