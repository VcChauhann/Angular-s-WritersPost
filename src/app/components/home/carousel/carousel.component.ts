import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeInterpreterService } from 'src/app/service/theme/theme-interpreter.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private router:Router,private inter:ThemeInterpreterService) {

  }
  ngOnInit(): void {
  }

  tiles = [
    {text: 'Default', cols: 1, rows: 1, type: 'default'},
    {text: 'Dark', cols: 1, rows: 1, type: 'black'},
    {text: 'CALM', cols: 1, rows: 1, type: 'calm'}
  ];

  writePage(tileName:string){
    this.inter.sendMessage(tileName);
    this.router.navigateByUrl("/write");

  }
}
