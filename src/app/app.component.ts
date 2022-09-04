import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'change Detection';
  _count = 1 ; 
  c = 99; 
  Counter : BehaviorSubject<any>; 

  constructor(private cd : ChangeDetectorRef){
    // this.cd.detach();
    this.Counter = new BehaviorSubject<any>({
      count: this._count
    });
  }

  incCount(){
   // this.counter.count = this.counter.count + 1; 
  //  this.counter = {
  //   count: this.counter.count
  //  }
  //   console.log(this.counter.count);
  this.Counter.next({count: ++ this._count}); 
  }
  ngOnInit(): void{
    //  setInterval(()=>{
    //    this.counter = this.counter + 1; 
    //  },1000);
  }

}
