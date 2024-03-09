import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {RAW_SRC} from '../../../core/utils/app-data';
import {Course} from '../../../interfaces/common/course.interface';
import {Subscription} from 'rxjs';
import {CourseService} from '../../../services/common/course.service';
import {Pagination} from '../../../interfaces/core/pagination.interface';
import {FilterData} from '../../../interfaces/core/filter-data.interface';

@Component({
  selector: 'app-products-2',
  templateUrl: './products-2.component.html',
  styleUrl: './products-2.component.scss'
})
export class Products2Component implements OnInit, OnDestroy {

  @Input({required: true}) img: string = null;
  @Input({required: true}) page: number = 0;

  // Static Data
  readonly rawSrcset = RAW_SRC;

  // Store Data
  products: Course[] = [];

  // Subscription
  private subGetData1: Subscription;

  // Inject
  private readonly courseService = inject(CourseService);

  ngOnInit(): void {
    console.log(Date.now() + ' -> Products2Component()')
    // Base data
    this.getAllCourses();
  }

  /**
   * HTTP REQUEST HANDLE
   * getAllCourses()
   * getAllCategories()
   * getSubCategoriesByCategorySlug()
   */

  private getAllCourses() {

    const mSelect = {
      name: 1,
      slug: 1,
      bannerImage: 1,
      isFeatured: 1,
      salePrice: 1,
      discountAmount: 1,
      discountType: 1,
      type: 1,
      isMultiplePrice: 1,
      prices: 1,
      canSaleAttachment: 1,
      attachmentSalePrice: 1,
      attachmentDiscountAmount: 1,
      attachmentDiscountType: 1,
      category: 1,
      subCategory: 1,
      childCategory: 1,
    };

    const pagination: Pagination = {
      pageSize: 9,
      currentPage: this.page,
    };

    const filterData: FilterData = {
      select: mSelect,
      pagination: pagination,
      filter: {status: 'publish'},
      sort: {createdAt: -1},
    };

    this.subGetData1 = this.courseService
      .getAllCourses(filterData, null)
      .subscribe({
        next: (res) => {
          this.products = res.data.map(m => {
            return {
              ...m,
              ...{
                bannerImage: this.img
              }
            }
          });
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  /**
   * ON Destroy
   */
  ngOnDestroy(): void {

    if (this.subGetData1) {
      this.subGetData1.unsubscribe();
    }

  }
}
