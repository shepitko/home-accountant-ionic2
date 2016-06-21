import {Page} from 'ionic-angular';
import {SpendingPage} from '../spending/spending';
import {IncomePage} from '../income/income';
import {AddWalletPage} from '../add-wallet/add-wallet';
import {StatisticPage} from '../statistic/statistic';
import {WalletService} from '../../providers/wallet-service/wallet-service';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [WalletService]
})
export class HomePage {  
  public sum = {income:0, spend:0, total:0};
  public wallets: any;
  spendingPage = SpendingPage;
  incomePage = IncomePage;
  addWalletPage = AddWalletPage;
  statisticPage = StatisticPage;

  constructor(public walletService: WalletService) {
    this.loadWallets();
    this.calculation();
  }
  loadWallets(){
    this.walletService.loadWallets()
    .then(data => {
      this.wallets = data;
    });
  }
  calculation(){
    this.walletService.loadWallets().then(data => {
      data.forEach(res => {
        if(res['category']['types'] == 'spending'){
          this.sum['spend'] += parseFloat(res['price'])
        }else if(res['category']['types'] == 'income'){
          this.sum['income'] += parseFloat(res['price'])
        }
      })
      this.sum['total']= parseFloat((this.sum['income'] - this.sum['spend']).toFixed(2));
      console.log(this.sum);
    });
  }
  
}
