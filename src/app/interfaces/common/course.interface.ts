export interface Course {
  _id?: string;
  name: string;
  slug: string;
  type: 'video-course' | 'live-course' | 'lecture-sheet';
  description?: string;
  bannerImage?: string;
  image?: string;
  introYoutubeVideo?: string;
  category?: any;
  subCategory?: any;
  tag?: any;
  instructor?: any;
  learningScopes?: string[];
  benefits?: string[];
  opportunities?: string[];
  isLiveClass?: boolean;
  groupLink?: string;
  courseModules?: CourseModule[];
  prices?: Price[];
  childCategory?: any,
  isMultiplePrice?: boolean;
  salePrice?: number;
  discountType?: number;
  discountAmount?: number;
  totalSold?: number;
  totalDuration?: string;
  totalUsers?: string;
  totalExam?: string;
  totalClass?: string;
  pdfAttachments?: PDFAttachment[];
  canSaleAttachment?: boolean;
  specifications?: any;
  attachmentSalePrice?: number;
  attachmentDiscountType?: number;
  attachmentDiscountAmount?: number;
  status?: string;
  priority?: number;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  createdAt?: Date;
  updatedAt?: Date;
  select?: boolean;
  orderType?: 'video-course' | 'live-course' | 'lecture-sheet';
}

export interface CourseModule {
  _id?: string;
  name?: string;
  description?: string;
  video?: string;
  attachment?: string;
  quiz?: any;
  type?: string;
  isFree?: boolean;
}

export interface Price {
  _id?: string;
  unit?: string;
  name?: string;
  duration: number,
  costPrice: number,
  salePrice: number,
  discountType: number,
  discountAmount: number;
  specifications: any;
}


export interface PDFAttachment {
  name?: string;
  url?: string;
}
