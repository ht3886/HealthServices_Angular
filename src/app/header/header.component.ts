import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onRegister(){
    this.router.navigate(['/register'])
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  onMaintenance(){
    alert("This page is under maintenance")
  }
}
