import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  date = "";

 

  ngOnInit(): void {
    const obs$ = interval(1000);
    obs$.subscribe((d)=>{
      this.date = new Date().toLocaleTimeString();
    })
  }

}
