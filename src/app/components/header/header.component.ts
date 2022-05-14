import { Component, OnInit } from '@angular/core';
import { CartitemsapiService } from 'src/app/Services/cartitemsapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  constructor(private cartService : CartitemsapiService) { }

  ngOnInit(): void {
    this.cartService.viewcartitems()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
