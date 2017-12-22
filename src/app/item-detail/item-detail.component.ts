import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Item } from '../item';
import { ItemServService } from '../item-serv.service';




@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;

  constructor(
    private route: ActivatedRoute,
  private itemServService: ItemServService,
  private location: Location
  ) { }

  ngOnInit() {
    this.getItem();
  }
  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('sno');
    this.itemServService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.itemServService.updateHero(this.item)
      .subscribe(() => this.goBack());
  }

}
