import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit //OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
  {

  // @Input() name: string = '';
  // subscription: Subscription[]
  // constructor(private userService: userService) {
  //   const data = this.userService.getItem('userval')
  // }
  // ngOnchange(changes: SimpleChange) {
  //   when any variable values get changes this event will triger
  //   console.log('1 ))ng onchanges called');
  // }
  // ngOnInit() {
  //   this.loadUser()
  //   console.log('2 ))ng onchanges called');

  // }
  // loadUser() {

  // }
  // ngDoCheck() {
  // it checks if variable value has been initialized
  //   console.log('3 ))ng ngDoCheck called');
  // }
  // ngAfterContentInit() {
  // this event trigger before any image or pdf get rendered
  //   console.log('4 ))ng ngAfterContentInit called');
  // }
  // ngAfterContentChecked() {
  // this event trigger  any image or pdf get rendered
  //   console.log('5 ))ng ngAfterContentChecked called');
  // }
  // ngAfterViewInit() {
  //   const dd = document.getElementById('txtName')['']
  //   console.log('6 ))ng ngAfterViewInit called');
  // }
  // ngAfterViewChecked() {
  //   console.log('7 ))ng ngAfterViewChecked called');
  // }
  // ngOnDestroy() {
  //   console.log('8 ))ng ngOnDestroy called');
  //   this.subscription.array.forEach(element => {
  //     element.unsubscribe();
  //   });
  // },

  ngOnInit(): void {

  }
}
