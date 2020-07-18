import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router : Router,private demoService : DemoService) { }

userData = {
  username : "",
  password : ""
}

  ngOnInit() {
    console.log("data from service",this.demoService.userData);
  }

  login(){
    if(this.userData.username === this.demoService.userData.username && this.userData.password === this.demoService.userData.password){
      alert("Login successful")
      console.log("user input", this.userData)
      this.router.navigateByUrl("dashboard");
    }else{
      alert("Username or password is wrong")
    }
  

  }

}
