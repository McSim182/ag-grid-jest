import { Component } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { ColDef } from '@ag-grid-community/core';

@Component({
  standalone: true,
  imports: [AgGridModule],
  selector: 'ag-grid-jest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  rowData = [{ name: 'name1' }, { name: 'name2' }];
  colDefs: Array<ColDef> = [{ field: 'name' }];
}
