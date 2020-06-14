import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Assignment2';
  showNav:boolean = true;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.userRegistered.subscribe((isRegistered: boolean)=>{
      console.log(isRegistered);
      this.showNav = isRegistered;
    })
  }
  ngOnDestroy(): void {
    // this.userService.userRegistered.unsubscribe();
  }
}
