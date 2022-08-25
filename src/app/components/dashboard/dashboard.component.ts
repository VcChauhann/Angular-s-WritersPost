import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/service/login/login.service';
import { dbContent } from 'src/app/DBContent';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UpdateWritingService } from 'src/app/service/updateDB/update-writing.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DashboardComponent implements OnInit {

  constructor(private updateWritingService: UpdateWritingService, private loginService: LoginService, private router: Router, private rendrer: Renderer2, private _liveAnnouncer: LiveAnnouncer) {
    this.rendrer.setStyle(document.body, 'background-color', 'white');
    this.rendrer.setStyle(document.body, 'background-image', '');
    this.rendrer.setStyle(document.body, 'color', 'black');
  }
  // variable declaration
  userEmails = {
    email: this.loginService.getUserEmail()
  }
  public contentsArray: dbContent[] = [];

  panelOpenState = false;
  columnsToDisplay: string[] = ['text', 'lastEditedOn', 'createdOn'];
  expandedElement = false;


  ngOnInit(): void {

    this.updateContentsArray();
    this.applyFilter("");
  }

  updateContentsArray() {

    this.updateWritingService.getData(this.userEmails).subscribe(
      res => {
        res.forEach(U => {
          this.contentsArray.push(U);
        })
      },
      err => {
        console.log(err);
      }
    )
  }


  edit(id: string) {
    localStorage.setItem("editId", id);
    this.router.navigateByUrl("edit")
  }


  delete(id: any) {
    this.updateWritingService.deleteData(id).subscribe(
      res => {
        console.log("Successfully deleted");

      },
      err => {
        console.log("error while deleting");
        console.log(err);

      }
    )
    location.reload();
  }

  //filtering data

  dataSource = new MatTableDataSource(this.contentsArray);

  applyFilter(event: any) {
    let filterValue="";
    filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

//paginator

  //paginator

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //sort
  //sort

  @ViewChild(MatSort)
  sort!: MatSort;
}
