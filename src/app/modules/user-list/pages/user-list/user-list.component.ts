import { Component, OnInit, Renderer2, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { AdminUserListService } from '@/core/services/admin-user-list.service';
import { User } from '@/shared/models/user';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  userData = new MatTableDataSource([]);
  disabledUserData = new MatTableDataSource([]);
  enabledUserData = new MatTableDataSource([]);

  setUsers = [];

  displayedColumns: string[] = ['id', 'name', 'role', 'button'];

  constructor(
    private listUsers: AdminUserListService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.userData.paginator = this.paginator.toArray()[0];
    this.enabledUserData.paginator = this.paginator.toArray()[1];
    this.disabledUserData.paginator = this.paginator.toArray()[2];
  }

  loadUsers() {
    this.listUsers.getAllUsers().subscribe( res => {
      console.log(res);
      let response;
      response = res.all_users;
      let resultData = response;
      this.userData.data = resultData;
    }, err => console.log(err));

    this.listUsers.getDisabledUsers().subscribe( (res) => {
      let response;
      response = res.disabled_users;
      let resultData = response;
      this.disabledUserData.data = resultData;
    }, err => console.log(err));

    this.listUsers.getEnabledUsers().subscribe( res => {
      let response;
      response = res.enabled_users;
      let resultData = response;
      this.enabledUserData.data = resultData;
    }, err => console.log(err));
  }

  setUsersToggle(user, enabled, event) {
    const btnClass = event.target.classList;
    if(btnClass.contains('mat-primary')) {
      this.renderer.removeClass(event.target, 'mat-primary');
      this.renderer.addClass(event.target, 'mat-warn');
    } else if (btnClass.contains('mat-warn')) {
      this.renderer.removeClass(event.target, 'mat-warn');
      this.renderer.addClass(event.target, 'mat-primary');
    }
    // set user privileges
    if (enabled === 0) {
      enabled = 1;
    } else {
      enabled = 0;
    }
    // create object for array
    const userObj = {
      "user_id": user,
      "enabled": enabled
    }
    // find if user already exists in array
    const index = this.setUsers.findIndex(x => x.user_id === user);
    if (index > -1) {
      this.setUsers.splice(index, 1);
    } else if (index < 0) {
      this.setUsers.push(userObj);
    }
  }

  sendUsers() {
    // send users to back end
    this.listUsers.toggleUsers(this.setUsers).subscribe( res => {
      console.log(res);
      this.setUsers = [];
      this.loadUsers();
    }, err => {
      console.log(err);
      this.setUsers = [];
    });
  }
}
