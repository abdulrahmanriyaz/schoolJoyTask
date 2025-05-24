import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GraduationTrackInfoComponent } from './graduation-track-info/graduation-track-info.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { StatItem } from './models';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BadgesTableComponent } from "./badges-table/badges-table.component";
import { debounceTime } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GraduationTrackInfoComponent,
    NzTabsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    BadgesTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent implements OnInit {
  fb = inject(FormBuilder)
  title = 'dashboard-task';
  searchTerm = new FormControl();
  gradTrack: StatItem[] = [
    { data: "50", title: "Total Students Enrolled " },
    { data: "5", title: "Badges " },
    { data: "68%", title: "Completion Rate" },
    { data: "5", title: "Students At Risk" },
  ];
  dataSet = [
    {
      badge: "Badge Title",
      total_goals: 5,
      completed: 4,
      in_progress: 1,
      not_started: 0,
      completion_rate: 73
    },
    {
      badge: "Badge Title",
      total_goals: 5,
      completed: 4,
      in_progress: 1,
      not_started: 0,
      completion_rate: 73
    },
    {
      badge: "Badge Title",
      total_goals: 5,
      completed: 4,
      in_progress: 1,
      not_started: 0,
      completion_rate: 73
    },
  ];
  headers: string[] = [
    "Badge",
    "Total Goals",
    "Completed",
    "In Progress",
    "Not Started",
    "Completion Rate",
  ]

  validateForm = this.fb.group({
    search: this.fb.control(''),
  });
  destroyerRef = inject(DestroyRef);

  ngOnInit(): void {
    this.validateForm.controls.search.valueChanges
      .pipe(takeUntilDestroyed(this.destroyerRef),
        debounceTime(500))
      .subscribe(res => {
        //call api or filter
      })
  }
}
