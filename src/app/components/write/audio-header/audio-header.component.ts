import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-audio-header',
  templateUrl: './audio-header.component.html',
  styleUrls: ['./audio-header.component.css']
})
export class AudioHeaderComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  loggedIn = false;
  ngOnInit(): void {
    
    this.loggedIn = this.loginService.isLoggedIn();
    
  }

  @Input() isAudioPlaying:any;
  @Input() audioBeingPlayed:any;
  @Output() saveTextField = new EventEmitter();
 
  saveContent(){
    this.saveTextField.emit();
  }
}
