import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';

import { AuthenticationService } from '@/core/services/auth/authentication.service'

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  version = environment.version;
  roleID: number;

  navItems = [];

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    console.log('auth:', this.authService.currentUserCredentialValue.user)
    if (this.authService.currentUserCredentialValue.user && this.authService.currentUserCredentialValue.user.role_id == 1) {
      this.roleID = this.authService.currentUserCredentialValue.user.role_id;
      this.displayAdminMenu();
    }
  }

  displayAdminMenu() {
    console.log('Admin Access Granted')
    this.navItems = [
      { link: '/admin/users', title: 'Users' },
      { link: '/admin/logs', title: 'Logs' },
      { link: '/admin/images', title: 'Document Viewer' },
    ]
  }



}
