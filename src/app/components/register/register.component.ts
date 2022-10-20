import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public roles: any[] = [];
  public form = {
    prenom:null,
    nom:null,
    email :null,
    password :null,
    confirmation :null,
    roles : this.roles

  }

  constructor(private userService : UserService) { }

  public error :any = []
  ngOnInit(): void {
  }
  submitRegistration(){
    // console.log(this.form)
    return this.userService
    .signup(this.form)
    .subscribe({
      next: (data: any)=>console.log(data),
      error: (err : Error)=> console.log(err.message)
   });
    //subscribe(data=>console.log(data),error=>this.handleError(error));
  }
  handleError (error:any){
    this.error = error.error.errors;
  }

}
