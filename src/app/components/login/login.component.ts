import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email :null,
    password :null,
  }
  public error = {
    email : null,
    password : null,
    error : null
  }
  constructor(private userService : UserService, private route : Router) { }

  ngOnInit(): void {
  }
  submitLogin(){
    return this.userService
    .login(this.form)
    .subscribe({
      next: (result: any)=>{
        if(result.success == true) {
          localStorage.setItem('access_token', result.data.token)
          this.route.navigate(['/register']);
        }

        else
        // localStorage.setItem('access_token', data.data.token);
        this.error= result.data
        // this.error.password = result.data.password

      },

      error: (err : Error)=> console.log(err.message)
   });
  }
}
