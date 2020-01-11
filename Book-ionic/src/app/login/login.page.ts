import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username = 'test';
  public password = '1234';


  constructor(private routes: Router) { }

  ngOnInit() {
  }

  goToHome(formData: NgForm) {
    const dataform = formData.value;
   // console.log(dataform);
    if (this.username == dataform.nomuser && this.password == dataform.motpasse){
        return this.routes.navigateByUrl('/tabs/books');
      }else{
        alert('username or password is incorrect, veuillez reessayé');
      }
  }
}
