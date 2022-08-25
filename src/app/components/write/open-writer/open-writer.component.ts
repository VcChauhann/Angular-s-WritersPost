import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login/login.service';
import { ThemeInterpreterService } from 'src/app/service/theme/theme-interpreter.service';
import { SaveTextAreaService } from 'src/app/service/writing/save-text-area.service';

@Component({
  selector: 'app-open-writer',
  templateUrl: './open-writer.component.html',
  styleUrls: ['./open-writer.component.css']
})

export class OpenWriterComponent implements OnInit {

  constructor(private inter: ThemeInterpreterService, private renderer: Renderer2,
    private _snackBar: MatSnackBar, private saveTextArea: SaveTextAreaService, private loginService: LoginService) {

  }

  theme = {
    "name": "",
    "audio": "http://www.sousound.com/music/healing/healing_02.mp3",
    "isPlaying": true
  }

  content = {
    text: ""
  }

  textAreaDetails = {
    text: this.content.text,
    lastEditedOn: '',
    createdOn: '',
    email: this.loginService.getUserEmail(),
    selectedTheme: this.theme.name
  }
  ngOnInit(): void {

    this.inter.currentMessage.subscribe(message => this.theme.name = message);
    if (this.theme.name === null || this.theme.name === "" || this.theme.name === "default") {
      this.renderer.setStyle(document.body, 'background-color', 'white');
      this.renderer.setStyle(document.body, 'background-image', "");
    }
    else if (this.theme.name === "black") {
      this.renderer.setStyle(document.body, 'background-color', 'black');
      this.renderer.setStyle(document.body, 'color', 'white');
      this.renderer.setStyle(document.body, 'background-image', "");
    }
    else {
      this.theme.audio = "/assets/" + this.theme.name + "_audio.mpeg";
      this.renderer.setStyle(document.body, 'background-image', "url('/assets/images/2.jpg')");
    }
    console.log(this.theme.name);

  }

  resetTextField(value: string) {
    this.content.text = value;
  }
 

  saveContentToDB() {
    this.textAreaDetails.text = this.content.text;
    console.log(this.textAreaDetails);
    this.saveTextArea.saveData(this.textAreaDetails).subscribe(
      res=>{
        console.log(res);

      },
      err=>{
        console.log("err-");
        console.log(err);

      }
    );
  }
}
