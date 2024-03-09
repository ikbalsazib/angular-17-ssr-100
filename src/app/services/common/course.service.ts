import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {FilterData} from '../../interfaces/core/filter-data.interface';
import {Course} from '../../interfaces/common/course.interface';

const API_URL = environment.apiBaseLink + '/api/course/';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // Inject
  private readonly httpClient = inject(HttpClient);


  /**
   * getAllCourses()
   */

  getAllCourses(filterData: FilterData, searchQuery?: string | any) {
    let params = new HttpParams();
    if (searchQuery) {
      params = params.append('q', searchQuery);
    }
    return this.httpClient.post<{ data: Course[], count: number, success: boolean }>(API_URL + 'get-all/', filterData, { params });
  }

  getCourseById(id: string, select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }
    return this.httpClient.get<{ data: Course, message: string, success: boolean }>(API_URL + 'get-by-public/' + id, { params });
  }

}
