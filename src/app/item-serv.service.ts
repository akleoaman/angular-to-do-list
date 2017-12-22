import { Injectable } from '@angular/core';
import { Item } from './item';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { ITEMS } from './items-mock';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemServService {

  private itemsUrl = 'http://localhost/angular/index.php';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  getItems(): Observable<Item[]> {
    this.messageService.add('Item service has sent data');
   return this.http.get<Item[]>(this.itemsUrl)
   .pipe(
    tap(items => this.log(`fetched items`)),
     catchError(this.handleError('getItems',[])
    ));
    }


    getHeroNo404<Data>(sno: number): Observable<Item> {
      const url = `${this.itemsUrl}/?id=${sno}`;
      return this.http.get<Item[]>(url)
        .pipe(
          map(items => items[0]), // returns a {0|1} element array
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} item id=${sno}`);
          }),
          catchError(this.handleError<Item>(`getItem sno=${sno}`))
        );
    }
    getItem(sno: number): Observable<Item> {
      const url = `${this.itemsUrl}/${sno}`;
    return this.http.get<Item>(url)
    .pipe(
      tap(_ => this.log(`fetched item sno=${sno}`)),
      catchError(this.handleError<Item>(`getItem sno=${sno}`))
    );
    }
     /* GET heroes whose name contains search term */
  searchItems(term: string): Observable<Item[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Item[]>(`api/items/?task=${term}`).pipe(
      tap(_ => this.log(`found item matching "${term}"`)),
      catchError(this.handleError<Item[]>('searchItem', []))
    );
  }

  // //////// Save methods //////////

  // /** POST: add a new hero to the server */
  // addHero (item: Item): Observable<Item> {
  //   return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
  //     tap((item: Item) => this.log(`added hero w/ id=${item.sno}`)),
  //     catchError(this.handleError<Item>('addItem'))
  //   );
  // }

  // /** DELETE: delete the hero from the server */
  // deleteHero (item: Item | number): Observable<Item> {
  //   const sno = typeof item === 'number' ? item : item.sno;
  //   const url = `${this.itemsUrl}/${sno}`;

  //   return this.http.delete<Item>(url, httpOptions)
  //   .pipe(
  //     tap(_ => this.log(`deleted item sno=${sno}`)),
  //     catchError(this.handleError<Item>('deleteItem'))
  //   );
  // }

  // /** PUT: update the hero on the server */
  // updateHero (item: Item): Observable<any> {
  //   return this.http.put(this.itemsUrl, Item, httpOptions).pipe(
  //     tap(_ => this.log(`updated item sno=${item.sno}`)),
  //     catchError(this.handleError<any>('updateItem'))
  //   );
  // }

  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ItemService: ' + message);
  }
}

