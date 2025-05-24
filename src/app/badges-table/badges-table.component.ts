import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';


@Component({
  selector: 'app-badges-table',
  standalone: true,
  imports: [
    CommonModule,
    NzDividerModule,
    NzTableModule
  ],
  templateUrl: './badges-table.component.html',
  styleUrl: './badges-table.component.css'
})
export class BadgesTableComponent {
  @Input() dataSet: any[] = [];
  @Input() headers: string[] = [];

}
