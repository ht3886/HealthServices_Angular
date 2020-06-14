import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-assessment',
  templateUrl: './schedule-assessment.component.html',
  styleUrls: ['./schedule-assessment.component.css']
})
export class ScheduleAssessmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    alert('Your appointment is confirmed !!' )
  }

}
