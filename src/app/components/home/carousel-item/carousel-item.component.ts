import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeInterpreterService } from 'src/app/service/theme/theme-interpreter.service';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {

  constructor(private router:Router,private inter:ThemeInterpreterService) { }

  ngOnInit(): void {
  }

  @Input() name = ''; 

  writePage(){
    this.inter.sendMessage(this.name);
    this.router.navigateByUrl("/write");

  }
}
