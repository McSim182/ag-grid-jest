import { Component } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';

@Component({
  standalone: true,
  imports: [AgGridModule],
  selector: 'ag-grid-jest-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ag-grid-jest';
}
