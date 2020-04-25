import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  signedin$ = this.authService.signedin$;    

  constructor(private authService: AuthService, private router: Router) { 
    
  }

  ngOnInit() {
    
  }

}
