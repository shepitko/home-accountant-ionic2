import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

const BASE_URL = 'http://localhost:8100/api/v1/wallets/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WalletService {
  data: any = null;

  constructor(public http: Http) {}

  loadWallets() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      this.http.get(BASE_URL)
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
  loadSpendWallets(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(BASE_URL+'types/spend')
      .map(res => res.json())
      .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  loadSumSpendWallets(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(BASE_URL+'types/spend_sum')
      .map(res => res.json())
      .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  loadIncomeWallets(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(BASE_URL+'types/income')
      .map(res => res.json())
      .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  loadSumIncomeWallets(){
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
       this.http.get(BASE_URL+'types/income_sum')
      .map(res => res.json())
      .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

