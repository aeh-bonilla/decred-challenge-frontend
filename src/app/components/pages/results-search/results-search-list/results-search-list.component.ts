import { Component, OnInit } from '@angular/core';
import { blockService } from 'src/app/services/block.service';


@Component({
  selector: 'app-results-search-list',
  templateUrl: './results-search-list.component.html',
  styleUrls: ['./results-search-list.component.scss']
})

export class ResultsSearchListComponent implements OnInit {
  

  hash! : string;
  height! : number;

  constructor(private objBlock : blockService){}
 

  ngOnInit(){
    this.getBestBlock();
  }

  getBestBlock(){
    this.objBlock.getBestBlock().subscribe( (objResponse : any) =>{
      console.log(objResponse);
      this.hash = objResponse.hash;
      this.height = objResponse.height;
    })
  }

  getBlock(){
    this.objBlock.getBlockbyIndex(505842).subscribe( (objResponse : any) =>{
      // console.log(objResponse);
      this.hash = objResponse.hash;
      this.height = objResponse.height;
    })
  }
}
