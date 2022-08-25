import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  @Input() textWritten:any;
  @Output() updateTextField = new EventEmitter();
 
  downloadText() {
    if (this.textWritten.length === 0) {
      this._snackBar.open('Write some thing !!', 'X', {
        duration: 2000
      });
      return;
    }
    // logic for downloading the file
    this.textWritten = this.textWritten.trim();
    const elem = document.createElement('a');
    const blob = new Blob([this.textWritten],{
      type: 'plain/text'
    })
    const date = new Date();
    const fileName = date.toString().replace(/ /g,"_").slice(1,-31);
    const fileUrl = URL.createObjectURL(blob);
    elem.setAttribute('href',fileUrl);
    elem.setAttribute('download', fileName+".txt");
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);

    this.resetTextArea();

  }

  resetTextArea() {
    this.textWritten = "";
    this.updateTextField.emit(this.textWritten);
  }

}
