type PopularHotCategory = 'all' | 'code' | 'school' | 'project';

export interface PopularHotItem {
  id: number;
  title: string;
  author: string;
  category: PopularHotCategory;
  like: number;
  preview: string;
  isAccepted: boolean;
  commentCount: number;
  createdAt: string; //(YYYY-MM-DD)
}

export interface PopularHotMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface PopularHotResponse {
  data: PopularHotItem[];
  meta: PopularHotMeta;
}
