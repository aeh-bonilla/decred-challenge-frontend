import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { marketCapService } from 'src/app/services/market-cap.service';
import { ObjCripto } from '../../interfaces/cripto.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  objCrypto: Array<ObjCripto> =[];

  pickerDate = '';
  pickerDate2 = '';
 
  constructor(private router : Router, private objmarketCap : marketCapService) { }

  ngOnInit(){
    this.getAllCrypto();
  }

  btnRedirectHome(){
    this.router.navigate(['/home']);
  }

  getAllCrypto(){
    this.objmarketCap.getDataAllCryptos()
    .subscribe(( objResponse : any) => {
      let arrReponse : Array<any> = objResponse.data;
      
      this.objCrypto = arrReponse.map(x => {
        var obj = new ObjCripto();

        obj.symbol    = x.symbol;
        obj.cmc_rank  = x.cmc_rank;
        obj.name      = x.name;
        obj.price     = Math.round((x.quote.USD.price)* 100) / 100;

        return obj;
      });
      // console.log(this.objCrypto);
    });
  }

}


