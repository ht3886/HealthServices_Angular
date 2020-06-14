import { Component, OnInit, ViewChild, ElementRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Observer } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') register: NgForm;
  currentPath;
  value:string = "register";
  flag:boolean = true;

  constructor(private router: Router, 
    private route:ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
  
    this.currentPath = this.route.snapshot.url[0].path;
    console.log(this.currentPath);
    if (this.value === this.currentPath){
      this.flag = false;
    }
    this.userService.userRegistered.next(this.flag);
  }

  onSubmit(){
    alert('SUCCESS!! :-)\n\n' + 'You are successfully registered' )
  }
  onCancel(){
    this.router.navigate(['/home'])
    this.userService.userRegistered.next(true);
  }
}
