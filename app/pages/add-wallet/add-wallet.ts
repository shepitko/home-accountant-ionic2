import {Page, NavController} from 'ionic-angular';
import {DatePicker} from 'ionic-native';

@Page({
  templateUrl: 'build/pages/add-wallet/add-wallet.html',
})
export class AddWalletPage {
  
 chromeReleased = '2008-09-02';

  constructor(public nav: NavController) {
  }
}
