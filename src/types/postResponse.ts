export interface PostData {
  id: number;
  title: string;
  author: string;
  category: "all" | "code" | "school" | "project";
  like: number;
  preview: string;
  isAccepted: boolean;
  commentCount: number;
  createdAt: string;
}

export interface PostMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface PostResponse {
  data: PostData[];
  meta: PostMeta;
}
