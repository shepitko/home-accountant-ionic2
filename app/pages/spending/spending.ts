import {Page, NavController} from 'ionic-angular';
import {WalletService} from '../../providers/wallet-service/wallet-service';

@Page({
  templateUrl: 'build/pages/spending/spending.html',
  providers: [WalletService]
})
export class SpendingPage {

  public spends: any;
  public sumSpends: any;

  constructor(public nav: NavController, 
              public walletService: WalletService) {
                this.loadSpends();
                this.loadSumSpends();
              }

  loadSpends(){
    this.walletService.loadSpendWallets()
    .then(data => {
      this.spends = data;
    });
  }
  loadSumSpends(){
    this.walletService.loadSumSpendWallets()
    .then(data => {
      this.sumSpends = data;
    });
  }
}
