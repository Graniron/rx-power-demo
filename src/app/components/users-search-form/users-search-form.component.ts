import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-users-search-form',
  templateUrl: './users-search-form.component.html',
  styleUrls: ['./users-search-form.component.css']
})
export class UsersSearchFormComponent implements OnInit {
  private username = new FormControl();

  private searchObj = {
    username: ''
  };

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.username.valueChanges
    .debounceTime(1000)
    .distinctUntilChanged()
    .subscribe(
      val => {
        console.log(val)
        this.usersService.getUsers(this.searchObj).subscribe(
          (users) => console.log(users),
          err => console.error(err)
        )
      }
    );
    // .switchMap(value => this.usersService.getUsers(this.searchObj).catch(err => Observable.of([])))
  }

}
