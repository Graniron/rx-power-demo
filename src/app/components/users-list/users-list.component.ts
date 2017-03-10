import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private users;
  private count;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.onUsersUpdate$.subscribe(
      results => {
        this.count = results.total_count;
        this.users = results.items;
      }
    )
  }

}
