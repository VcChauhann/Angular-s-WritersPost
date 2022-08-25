import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rendrer:Renderer2) { 
    this.rendrer.setStyle(document.body, 'background-color', 'white');
    this.rendrer.setStyle(document.body, 'background-image', '');
    this.rendrer.setStyle(document.body, 'color', 'black');
  }

  ngOnInit(): void {
  }

}
