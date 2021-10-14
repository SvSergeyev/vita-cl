import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-board-admin',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  content?: string;

  users?: UserComponent[];
  operators?: UserComponent[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminPage().subscribe(
      data => {
        this.users = data["users"];
        this.operators = data["operators"];

        // То, что ниже, не трогай, христа ради.
        this.content = data;
        console.log("data: " + data);
        console.log("users: " + this.users);
      },
      error => {
        this.content = JSON.parse(error.error).message;
      }
    );
  }
}
