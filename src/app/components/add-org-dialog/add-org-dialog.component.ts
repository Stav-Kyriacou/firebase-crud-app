import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Organisation } from "src/models/Organisation";


@Component({
  selector: 'app-add-org-dialog',
  templateUrl: './add-org-dialog.component.html',
  styleUrls: ['./add-org-dialog.component.scss']
})
export class AddOrgDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddOrgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OrgDialogData) { }

  ngOnInit(): void {
  }
  cancel() {
    this.dialogRef.close();
  }

}
export interface OrgDialogData {
  org: Organisation;

}
export interface OrgDialogResult {
  org: Organisation;
}
