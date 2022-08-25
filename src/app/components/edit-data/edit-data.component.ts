import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { dbContent } from 'src/app/DBContent';
import { UpdateWritingService } from 'src/app/service/updateDB/update-writing.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  constructor(private updateWriting: UpdateWritingService, private router: Router, private renderer: Renderer2) { }

  public editableData: dbContent ={
    id: 0,
    text: '',
    lastEditedOn: '',
    createdOn: '',
    email: ''
  };

  ngOnInit(): void {
    this.getParticularData();
    const changingTheme = localStorage.getItem("selectedTheme");
    console.log("ngOnIt");
    console.log(changingTheme);
    this.name = ''+changingTheme;
    if (changingTheme == 'dark') {
      this.renderer.setStyle(document.body, 'background-color', 'black');
      this.renderer.setStyle(document.body, 'background-image', "");
      this.renderer.setStyle(document.body, 'color', "white");
      
    }

  }
  editId: number | undefined;

  getParticularData() {
    const numb = localStorage.getItem('editId') || '0';
    const id = parseInt(numb) || 0;
    this.editId = id;
    this.updateWriting.getDataOfId(id).subscribe(
      res => {
        console.log(res);
        this.editableData = res;
      },
      err => {
        console.log(err);
      }
    )
  }






  name = 'default';
  theme = {
    "name": "",
    "audio": "",
    "isPlaying": true
  }
  audio = "http://www.sousound.com/music/healing/healing_05.mp3";

  saveContentToDB() {
    this.updateWriting.saveEditedData(this.editableData).subscribe(
      res => {
        console.log(res);

      },
      err => {
        console.log(err);

      }
    )

    location.href = "/dashboard";
  }
  resetTextField(value: string) {
    this.editableData.text = value;
  }

  themeUpdating(event: string) {
    localStorage.setItem("selectedTheme", event);
    location.reload();
  }
}
