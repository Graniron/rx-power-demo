import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSearchFormComponent } from './users-search-form.component';

describe('UsersSearchFormComponent', () => {
  let component: UsersSearchFormComponent;
  let fixture: ComponentFixture<UsersSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
