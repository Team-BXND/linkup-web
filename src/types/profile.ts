export type ProfileCategory = "all" | "code" | "school" | "project";

export interface ProfileMyInfo {
  username: string;
  email: string;
  point: number;
  ranking: number;
}

export interface ProfileMyAnswer {
  id: number;
  title: string;
  preview: string;
  category: ProfileCategory;
  answer: string;
}

export interface ProfileMyQuestion {
  id: number;
  title: string;
  preview: string;
  category: ProfileCategory;
  like: number;
  commentCount: number;
  isAccepted: boolean;
  page: number;
}

export interface ProfileMeta {
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface ProfileMyAnswerResponse {
  data: ProfileMyAnswer[];
  meta: ProfileMeta;
}

export interface ProfileMyQuestionResponse {
  data: ProfileMyQuestion[];
  meta: ProfileMeta;
}
