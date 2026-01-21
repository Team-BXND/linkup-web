import Banner from "@/components/common/Banner";
import Popular from "@/components/Popular";
import { useState } from "react";
import { linkupAxios } from "@/libs/customAxios";
import { Outlet, useParams } from "react-router-dom";
import {
  type PostMeta,
  type PostData,
  type PostResponse,
} from "@/types/postResponse";
import Questions from "@/components/Questions";

function QnA() {
  const [data, setData] = useState<PostData[]>([
    {
      id: 1,
      title: "React Query 캐싱 전략 질문",
      author: "김코딩",
      category: "code",
      like: 42,
      preview:
        "staleTime과 cacheTime의 차이가 헷갈립니다. 실무에서 어떻게 설정하시나요?",
      isAccepted: true,
      commentCount: 8,
      createdAt: "2024-05-20T09:30:00Z",
    },
    {
      id: 2,
      title: "졸업 프로젝트 팀원 구합니다 (프론트엔드)",
      author: "박학생",
      category: "project",
      like: 15,
      preview: "캡스톤 디자인 함께 하실 분 찾습니다. 현재 백엔드 2명 있습니다.",
      isAccepted: false,
      commentCount: 3,
      createdAt: "2024-05-21T14:15:00Z",
    },
    {
      id: 3,
      title: "알고리즘 스터디 모집",
      author: "이열공",
      category: "school",
      like: 5,
      preview: "매주 토요일 오전 10시, 백준 골드 문제 풀이 스터디입니다.",
      isAccepted: false,
      commentCount: 12,
      createdAt: "2024-05-22T18:45:00Z",
    },
    {
      id: 4,
      title: "타입스크립트 제네릭 활용법",
      author: "최데브",
      category: "code",
      like: 120,
      preview:
        "복잡한 컴포넌트 Props를 제네릭으로 깔끔하게 처리하는 팁 공유합니다.",
      isAccepted: false,
      commentCount: 25,
      createdAt: "2024-05-23T11:20:00Z",
    },
  ]);
  const [meta, setMeta] = useState<PostMeta>({
    total: 45,
    page: 1,
    pageSize: 10,
    totalPages: 5,
    hasNext: true,
    hasPrevious: false,
  });
  const { category } = useParams<{ category: string }>();
  const [page, setPage] = useState(1);

  linkupAxios
    .get<PostResponse>("/posts", {
      params: {
        category: category,
      },
    })
    .then((response) => {
      setData(response.data.data);
      setMeta(response.data.meta);
    });

  return (
    <>
      <Banner />
      <Popular />
      <Questions data={data} meta={meta} page={page} setPage={setPage} />
      <Outlet />
    </>
  );
}

export default QnA;
