import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { StatItem } from '../models';

@Component({
  selector: 'graduation-track-info',
  standalone: true,
  imports: [NzButtonModule, NzIconModule],
  templateUrl: './graduation-track-info.component.html',
  styleUrl: './graduation-track-info.component.css'
})
export class GraduationTrackInfoComponent {

  @Input() gradTrack: StatItem[] = [];



}
