import {Page, NavController} from 'ionic-angular';
import {WalletService} from '../../providers/wallet-service/wallet-service';

@Page({
  templateUrl: 'build/pages/income/income.html',
  providers: [WalletService]
})
export class IncomePage {

  public incomes: any;
  public sumIncomes: any;

  constructor(public nav: NavController,
              public walletService: WalletService) 
  {
    this.loadIncomes();
    this.loadSumIncomes();
  }

  loadIncomes(){
    this.walletService.loadIncomeWallets()
    .then(data => {
      this.incomes = data;
    });
  }
  loadSumIncomes(){
    this.walletService.loadSumIncomeWallets()
    .then(data => {
      this.sumIncomes = data;
    });
  }
}
