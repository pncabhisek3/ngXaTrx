import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  sbiData: any;
  hdfcData: any;
  constructor(private accountSvc: AccountService) { }

  ngOnInit(): void {
    // Fetch sbi data..
    this.accountSvc.getSbiAccounts().subscribe(resp=>{
      console.log("Fetch success. Sbi data:", resp);
      
      this.sbiData= resp ? JSON.stringify(resp) : "Sbi data not found";
    }, error=>{
      console.error("Fetch error. Sbi data not found");
    });

    // Fetch hdfc data..
    this.accountSvc.getHdfcAccout().subscribe(resp=>{
      console.log("Fetch success. Hdfc data:", resp);
      this.hdfcData=  resp ? JSON.stringify(resp) :  "Hdfc data not found";
    }, error=>{
      console.error("Fetch error. Hdfc data not found");
    });
}

}
