import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-basics',
  templateUrl: './html-basics.component.html',
  styleUrls: ['./html-basics.component.css']
})
export class HtmlBasicsComponent implements OnInit {

  items: any[];

  constructor() {
    this.items = [
      {name: 'Slide 1', image: 'Slide1.jpeg'},
      {name: 'Slide 2', image: 'Slide2.jpeg'},
      {name: 'Slide 3', image: 'Slide3.jpeg'},
      {name: 'Slide 4', image: 'Slide4.jpeg'},
      {name: 'Slide 5', image: 'Slide5.jpeg'},
      {name: 'Slide 6', image: 'Slide6.jpeg'},
      {name: 'Slide 7', image: 'Slide7.jpeg'},
      {name: 'Slide 8', image: 'Slide8.jpeg'},
      {name: 'Slide 9', image: 'Slide9.jpeg'},
      {name: 'Slide 10', image: 'Slide10.jpeg'},
      {name: 'Slide 11', image: 'Slide11.jpeg'},
      {name: 'Slide 12', image: 'Slide12.jpeg'},
      {name: 'Slide 13', image: 'Slide13.jpeg'},
      {name: 'Slide 14', image: 'Slide14.jpeg'}
    ];
  }

  ngOnInit() {
  }

}
