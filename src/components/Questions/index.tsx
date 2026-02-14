import type { PostData, PostMeta } from "@/types/postResponse";
import Category from "../Category";
import { Body, Title } from "../common/Text";
import TileContainer from "../common/TileContainer";
import Pagination from "../Pagination";
import QuestionItem from "../common/QuestionItem";
import * as S from "./style";
import type { Dispatch } from "react";

interface QuestionsProps {
  data?: PostData[];
  meta?: PostMeta;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

function Questions({ data, meta, page, setPage }: QuestionsProps) {
  return (
    <TileContainer>
      <S.TitleContainer>
        <Title size="md" weight="bold">
          🙋 질문 목록
        </Title>
        <Category />
      </S.TitleContainer>
      {data ? (
        data.map((elem, index) => {
          return <QuestionItem item={elem} index={index} showRank={false} />;
        })
      ) : (
        <Body size="md" weight="semibold">
          게시글이 존재하지 않습니다.
        </Body>
      )}
      {meta && (
        <Pagination
          page={page}
          setPage={setPage}
          totalPage={meta?.totalPages}
        />
      )}
    </TileContainer>
  );
}

export default Questions;
