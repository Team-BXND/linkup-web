import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";
import type {
  ProfileMyAnswer,
  ProfileMyAnswerResponse,
  ProfileMeta,
} from "@/types/profile";
import TileContainer from "@/components/common/TileContainer";
import MyAnswerItem from "@/components/MyAnswerItem";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";

function Answers() {
  const [answersData, setAnswersData] = useState<ProfileMyAnswer[]>([]);
  const [meta, setMeta] = useState<ProfileMeta>({
    total: 1,
    page: 1,
    pageSize: 10,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    linkupAxios
      .get<ProfileMyAnswerResponse>(`/profile/myans`, {
        params: {
          page: page,
        },
      })
      .then((response) => {
        setAnswersData(response.data.data);
        setMeta(response.data.meta);
      })
      .catch((error) => {
        alert(error);
      });
  }, [page]);

  return (
    <TileContainer title="내 답변">
      <S.ScrollArea>
        <S.DetailCover>
          {answersData.map((item) => (
            <MyAnswerItem key={item.id} item={item} />
          ))}
          <Pagination
            page={page}
            totalPage={meta.totalPages}
            setPage={setPage}
          ></Pagination>
        </S.DetailCover>
      </S.ScrollArea>
    </TileContainer>
  );
}

export default Answers;
