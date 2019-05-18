import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-test',
  templateUrl: './app-test.component.html',
  styleUrls: ['./app-test.component.css']
})
export class AppTestComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  public count =1;

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    console.log(this.count);
    if(this.count==1){
      this.childEvent.emit('Hey Garima listen to me!');
      this.count++;
    }
    else{
      this.childEvent.emit('No you listen to me!');
    }
    
  }
}
