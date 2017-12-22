import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { ItemServService } from '../item-serv.service';
import { Item } from '../item';

@Component({
  selector: 'app-itemsearch',
  templateUrl: './itemsearch.component.html',
  styleUrls: ['./itemsearch.component.css']
})
export class ItemsearchComponent implements OnInit {

  items$: Observable<Item[]>;
  private searchTerms = new Subject<string>();

  constructor(private itemServService: ItemServService) { }
  search(term: string): void {
    this.searchTerms.next(term);
  }


  ngOnInit(): void {
    this.items$ = this.searchTerms
    .pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.itemServService.searchItems(term)),
    );
  }

}
