import { Component, OnInit } from '@angular/core';
// We need to import the service
import { UserService } from '../Services/user.service';
// We need to import the interface
import { User } from '../models/user';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  // The constructor is where we inject the service
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  // We can access the usersList array from the service
  users: Array<any> = this.userService.usersList;

  // We can call the addUser method from the service
  createUser(user: string) {
    // We can create a new user object
    let newUser: User ={
      id: 2,
      name: user
    }
    // And pass it to the addUser method
    this.userService.addUser(newUser);
  }

  //to avoid typing errors creating the user object, we can use the interface or blueprint of the user object


}
