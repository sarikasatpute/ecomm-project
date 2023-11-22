import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {
  // menuType: string = 'default';
  // constructor(private router: Router) {}
  // ngOnInit(): void {
  //   this.router.events.subscribe((val: any) => {
  //     if (val.url) {
  //       if (localStorage.getItem('seller') && val.url.includes('seller')) {
  //         console.log('inside seller');
  //         this.menuType = 'seller';
  //       } else {
  //        this.menuType = 'default';
  //       }
  //     }
  //   });
  // }
}
