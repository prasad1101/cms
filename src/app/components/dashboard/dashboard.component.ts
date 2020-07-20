import { Component, OnInit } from '@angular/core';
import { DalService } from 'src/app/services/dal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dal : DalService) { }

  customerData : any;
isEdit : boolean =false;
  dataToAdd = {
    id : null,
    name : "",
    phoneNo : null
  }


  ngOnInit() {
    this.getData()
    this.getDataById()
  }

  getData(){
    this.dal.getData().subscribe(x=>{
      this.customerData = x;
      console.log("output from server",this.customerData);
    })
  }

  getDataById(){
    this.dal.getDataById(2).subscribe(x=>{
      console.log("data by id",x);
    })
  }

  addCustomer(){

    if(!this.dataToAdd.id){
      alert("please enter id")
      return
    }
    if(!this.dataToAdd.name){
      alert("please enter name")
      return
    }

    if(!this.dataToAdd.phoneNo){
      alert("please enter phone number")
      return
    }

    this.dal.addCustomer(this.dataToAdd).subscribe(x=>{
      console.log("data added success",x)
    })
    //console.log("data to add",this.dataToAdd)
  }

  deleteCustomer(id){
// console.log("delete id",id);
this.dal.deleteCustomer(id).subscribe(x=>{
  console.log("delete success",x)
  //this.getData();
})
  }


  updateCustomer(customerData){
    this.isEdit = true
console.log("cust data for update",customerData)
this.dataToAdd = customerData
  }

  updateData(){
    this.dal.updateCustomer(this.dataToAdd.id,this.dataToAdd).subscribe(x=>{
      console.log("update success",x);
      this.isEdit = false;
      this.dataToAdd = undefined
    })
  }


}
