import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reuse-table',
  templateUrl: './reuse-table.component.html',
  styleUrls: ['./reuse-table.component.css']
})
export class ReuseTableComponent {

  @Input() columnArray: string[] = [];
  @Input() gridArray: string[] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  edit(item: any) {
    this.onEdit.emit(item);
  }
  deleteRecord(item: any) {
    this.onDelete.emit(item);
  }
}
