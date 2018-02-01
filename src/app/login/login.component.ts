import { Component, OnInit,ViewChild,TemplateRef,EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {FormsModule } from "@angular/forms";
import{Router} from"@angular/router";
import{ UserService} from '../user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modalRef: BsModalRef;
  userdata={
    name:'',
    password:''
  }
  usercheck={
    username:'',
    userpw:''
  }
  @ViewChild('myForm') public tempForm;
  ps:any;
  is:any;

  constructor(private modalService: BsModalService,private router:Router,private user:UserService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);};

 adduser(){
  localStorage.setItem('name',this.userdata.name);
  localStorage.setItem('pw',this.userdata.password);
  alert('You have succesfully signed up');
 }
 formData(){
  // this.userData = {
  //     name: '',
  //     email: '',
  //     password: '',
  //     phone: ''
  // }
  
   //this.tempForm.markAsUntouched();
  console.log(this.userdata)
}
 check(){
   this.ps=localStorage.getItem('name');
   this.is=localStorage.getItem('pw');
   if(this.usercheck.username !== this.ps || this.usercheck.userpw !== this.is) {
    alert('ERROR');
}else {
  this.user.setUserloggedin();
    this.router.navigate(['home'])
}
 }

  ngOnInit() {
  }

}
