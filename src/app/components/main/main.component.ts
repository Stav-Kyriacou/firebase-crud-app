import { Component, OnInit } from '@angular/core';
import { Organisation } from 'src/models/Organisation';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddOrgDialogComponent, OrgDialogResult } from '../add-org-dialog/add-org-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  organisations: Organisation[] = [];

  constructor(private dialog: MatDialog, private _store: AngularFirestore) { }

  ngOnInit(): void {
    console.log("onInit called");

    this._store.collection('organisations')
      .valueChanges({ idField: 'id' })
      .subscribe(response => {
        console.log(response);
        this.organisations = response.map((result: any) => {
          let org: Organisation = {
            id: result.id,
            name: result.name,
            description: result.description
          };
          return org;
        });
        console.log(this.organisations);
      });
  }
  newOrg() {
    const dialogRef = this.dialog.open(AddOrgDialogComponent, {
      width: '500px',
      data: {
        org: {}
      }
    });
    dialogRef
      .afterClosed()
      .subscribe((result: OrgDialogResult | undefined) => {
        if (!result) return;
        this._store.collection('organisations').add(result.org);
      })
  }
  // newTask(): void {
  //   const dialogRef = this.dialog.open(TaskDialogComponent, {
  //     width: '270px',
  //     data: {
  //       task: {},
  //     },
  //   });
  //   dialogRef
  //     .afterClosed()
  //     .subscribe((result: TaskDialogResult | undefined) => {
  //       if (!result) {
  //         return;
  //       }
  //       this.store.collection('todo').add(result.task)
  //     });
  // }

}
