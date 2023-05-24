import { Component, OnInit,Input, SimpleChanges, ViewChild, ElementRef, } from '@angular/core';
import { Product } from '../users/product';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css']
})
export class HooksChildComponent implements OnInit {
  @Input()parentData!:string;
  @Input() product!:Product;
  @ViewChild("childHook") viewChild! : ElementRef
  constructor(){
    console.log("constructor called..")
  }
  ngOnInit():void{
    console.log("ngoninit called..")
  }
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnchanges called",changes)
  }
  ngDoCheck(){
    console.log('ngDoCheck',this.product)
  }
  ngAfterViewInit(){
    console.log('NgAfterviewinit',this.viewChild);
  }

}
