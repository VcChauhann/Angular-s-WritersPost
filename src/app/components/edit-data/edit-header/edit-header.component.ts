import { Component, Input, OnInit, Output,EventEmitter, Renderer2 } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css']
})
export class EditHeaderComponent implements OnInit {

  constructor(private loginService:LoginService, private renderer:Renderer2) { }

  loggedIn = false;
  ngOnInit(): void {
    
    this.loggedIn = this.loginService.isLoggedIn();
    if(localStorage.getItem("selectedTheme") != null){
      this.selected = ''+localStorage.getItem("selectedTheme");
    }
    
  }
  
  @Input() isAudioPlaying:any;
  @Input() audioBeingPlayed:any;
  @Output() saveTextField = new EventEmitter();
  @Output() updateTheme = new EventEmitter();
  
  saveContent(){
    this.saveTextField.emit();
  }
  selected = 'default';
  selectedTheme(){
    this.updateTheme.emit(this.selected);
  }

  
}
