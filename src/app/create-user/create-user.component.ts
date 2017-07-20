import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UserService]
})
export class CreateUserComponent implements OnInit {

  model: any = {};
  public serverResponse: any;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.serverResponse = this.userService.getServerResponse();
  }

  createUser() {

  }

}
