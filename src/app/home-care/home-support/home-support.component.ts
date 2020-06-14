import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-support',
  templateUrl: './home-support.component.html',
  styleUrls: ['./home-support.component.css']
})
export class HomeSupportComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  onScheduleCare(){
    this.router.navigate(['./bookHomeCare'], {relativeTo: this.route})
  }
}
