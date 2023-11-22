import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { signUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent implements OnInit {
  constructor(private sellerService: SellerService, private router: Router) {}
  showLogin = false;
  authError: string = '';
  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }
  signUp(data: signUp): void {
    this.sellerService.userSignUp(data);
  }
  openLogin(): void {
    this.showLogin = true;
  }
  openSignUp(): void {
    this.showLogin = false;
  }
  login(data: signUp): void {
    this.authError = "";
    this.sellerService.userLogin(data);
    this.sellerService.isLoginError.subscribe((iserror) => {
      if (iserror) {
        this.authError = 'Email or password is not currect';
      }
    });
  }
}
