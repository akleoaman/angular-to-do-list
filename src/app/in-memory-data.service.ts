import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ITEMS } from './items-mock';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      {sno: 1, task: 'learn html'},
      {sno: 2, task: 'learn php'},
      {sno: 3, task: 'learn javascript'},
      {sno: 4, task: 'learn css'},
      {sno: 5, task: 'learn wordpress'},
    ];
    return {items};
  }
}



