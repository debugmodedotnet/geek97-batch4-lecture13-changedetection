// import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';

// @Component({
//   selector: 'app-counter',
//   templateUrl: './counter.component.html',
//   styleUrls: ['./counter.component.css'],
//   changeDetection:ChangeDetectionStrategy.OnPush
// })
// export class CounterComponent implements OnInit, OnChanges, OnDestroy{
//   @Input() Counter? : Observable<any>; 
//   @Input() a? : Observable<any>; 
//   @Input() b ?  : Observable<any>; 
//   CounterSubscription? : Subscription; 
//   count: any; 

//   constructor(private cd : ChangeDetectorRef) { 
//    // this.cd.detach();
//   }
//   ngOnInit(): void {
   
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     this.CounterSubscription = this.Counter?.subscribe((data:any)=>{
//        this.count = data.count; 
//        console.log(this.count);
//       //  this.cd.reattach();
//         this.cd.markForCheck();
       
//          // this.cd.detectChanges();
//     })
//   }

//   ngOnDestroy(): void {
//     if(this.CounterSubscription != undefined){
//       this.CounterSubscription.unsubscribe();
//     }
//   }

 

// }

// // 1. whenever data chnages ob ervable 
// // 2. then run change detector markforcheck or detectchanges 
// // 3. if data does not Change
// // 4. do not run change detector 


import {Component,ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
   @Input() Counter? : Observable<any>; 
  @Input() a? : Observable<any>; 
}
