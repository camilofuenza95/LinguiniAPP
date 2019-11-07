import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private data:any;
  constructor(public api:ApiService) {
    this.data = [{id:"1",houseNumber:"454",streetName:"Main Street",state:"California",city:"Menhaten",mobileNumber:"5854585478"}];
   }

   addAddress(obj){
    obj.id = 1;
    if(this.data.length>0){ obj.id = parseInt(this.data[this.data.length-1].id)+1;  }
    this.data.push(obj);
   }

   updateAddress(obj){
    this.data.forEach(function(addr, i){
        if (obj.id === addr.id) {
          this.data[i] = obj;
        }
      }.bind(this));
   }

  getAddress(){  return this.data; }

  removeAddress(obj){
     console.log(obj);
      this.data.forEach(function(addr, i){
        if (obj.id === addr.id) {
          this.data.splice(i, 1);
        }
      }.bind(this));
  }

}
