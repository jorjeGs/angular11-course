import { Injectable } from '@angular/core';

// Injectable is a decorator that marks a class as available to an injector for instantiation.
@Injectable({
  // The providedIn property configures the module injector for the service with a provider of the specified token.
  //root means that the service is provided in the application root.
  //if we want to provide the service in a specific module, we can specify the module name instead of root like this:
  //providedIn: 'app.module'
  //or we can provide the service in a component like this:
  //providedIn: 'app.component'
  providedIn: 'root'
})

// The service is a simple class with a usersList array and two methods: addUser and deleteUser.
export class UserService {

  usersList: Array<any> = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Mary'},
    {id: 3, name: 'Peter'},
    {id: 4, name: 'Jane'},
    {id: 5, name: 'Mark'}
  ]

  addUser(user: any) {
    this.usersList.push(user);
  }

  constructor() { }
}
