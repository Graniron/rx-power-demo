import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';


@Component({
  selector: 'app-users-search-form',
  templateUrl: './users-search-form.component.html',
  styleUrls: ['./users-search-form.component.css']
})
export class UsersSearchFormComponent implements OnInit {
  private username = new FormControl();
  private language = new FormControl();

  private searchObj = {
    username: '',
    language: ''
  };

  constructor(private usersService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.language.valueChanges.merge(this.username.valueChanges)
    .debounceTime(1000)
    .distinctUntilChanged()
    .subscribe(
      val => {
        this.router.navigate([], {
          queryParams: this.searchObj,
          relativeTo: this.activatedRoute
        })       
      }
    );   

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.searchObj.username = params['username'] || '';
        this.searchObj.language = params['language'] || '';

        this.usersService.getUsers(this.searchObj).subscribe(
          (users) => this.usersService.shareUsers(users),
          err => console.error(err)
        )
      }
    )
  }

}
