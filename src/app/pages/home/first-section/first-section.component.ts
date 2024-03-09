import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../../../interfaces/common/course.interface';
import {Subscription} from 'rxjs';
import {CourseService} from '../../../services/common/course.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss'
})
export class FirstSectionComponent implements OnInit, OnDestroy {
// Store Data
  title = 'ui-ssr';
  course: Course;

  // Subscriptions
  private subGetData: Subscription;

  // Inject
  private readonly courseService = inject(CourseService);

  ngOnInit(): void {
    console.log(Date.now() + ' -> FirstSectionComponent()')
    // Base Data
    this.getCourseById();
  }


  private getCourseById() {
    this.subGetData = this.courseService.getCourseById('65eb400602d80e547940202e')
      .subscribe({
        next: res => {
          this.course = res.data;
        },
        error: err => {
          console.log(err)
        }
      })
  }


  /**
   * On Destroy
   */
  ngOnDestroy(): void {
    if (this.subGetData) {
      this.subGetData.unsubscribe();
    }
  }
}
