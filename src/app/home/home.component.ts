import { Component, OnInit,TemplateRef } from '@angular/core';
import{UserService} from '../user.service';
import { Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ref:BsModalRef;

  constructor(private user:UserService,private route:Router,private service:BsModalService) { }
  logout(){
    //localStorage.clear();
    this.user.isUserLoggedin=false;
    this.route.navigate(['/']);
  }
  openModal(template: TemplateRef<any>) {
    this.ref = this.service.show(template);
  }

  ngOnInit() {
  }

}
