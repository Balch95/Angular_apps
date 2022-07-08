import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  counterValue: number  = 0;
  stepValue: number   = 0;

  addStep(){
    this.counterValue++;
  }

  resetStep(){
    this.counterValue =0;
  }

  addSetStep(step: string){
    console.warn(Number(step))
    this.counterValue += Number(step)
  }

  ngOnInit(): void {
  }

}
