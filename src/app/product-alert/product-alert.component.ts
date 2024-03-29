import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  //Parameter
  @Input() product;

  //Output ist ein Event, dass im product-list definiert ist 
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  

}

