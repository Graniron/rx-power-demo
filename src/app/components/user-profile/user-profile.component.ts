import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private user;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
    ) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
        (params) => this.getUserInfo(params['id'])
      )
  }

  getUserInfo(id) {
    this.usersService.getUser(id).subscribe(
      user => this.user = user,
      err => console.error(err)
    )
  }

}
