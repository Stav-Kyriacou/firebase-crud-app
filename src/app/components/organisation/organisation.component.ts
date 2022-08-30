import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from 'src/models/Organisation';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {
  @Input() organisation: Organisation | null = null;
  // @Output() edit = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

}
