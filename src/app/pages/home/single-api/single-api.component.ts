import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../../../services/common/course.service';
import {Subscription} from 'rxjs';
import {Course} from '../../../interfaces/common/course.interface';

@Component({
  selector: 'app-single-api',
  templateUrl: './single-api.component.html',
  styleUrl: './single-api.component.scss'
})
export class SingleApiComponent implements OnInit, OnDestroy {
// Store Data
  course: Course;

  // Subscriptions
  private subGetData: Subscription;
  private subGetData1: Subscription;

  // Inject
  private readonly courseService = inject(CourseService);


  ngOnInit(): void {
    // Base Data
    this.getCourseById();
    console.log(Date.now() + ' -> SingleApiComponent()')
  }

  /**
   * HTTP REQUEST HANDLE
   * getCourseById()
   */

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
    if (this.subGetData1) {
      this.subGetData1.unsubscribe();
    }
  }
}
