import Answer from "@/components/Answer";
import { Title } from "@/components/common/Text";
import TileContainer from "@/components/common/TileContainer";
import Question from "@/components/Question";
import WriteAnswer from "@/components/WriteAnswer";
import { linkupAxios } from "@/libs/customAxios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import Showdown from "showdown";
import DOMPurify from "dompurify";

interface Comment {
  commentId: number;
  author: string;
  content: string;
  isAccepted: boolean;
  createdAt: string;
}

interface Detail {
  title: string;
  author: string;
  category: "all" | "code" | "school" | "project";
  content: string;
  like: number;
  createAt: string;
  isAccepted: boolean;
  isLike: boolean;
  isAuthor: boolean;
  comment: Comment[];
}

interface RawDetailComment {
  commentId: number;
  author: string;
  content: string;
  createdAt: string;
  isAccepted?: boolean;
}

interface RawDetail {
  title: string;
  author: string;
  category: "all" | "code" | "school" | "project";
  content: string;
  like: number;
  createAt: string;
  isAccepted: boolean;
  isLike: boolean;
  isAuthor?: boolean;
  comments?: RawDetailComment[];
  comment?: RawDetailComment[];
}

interface RawDetailResponse {
  status: number;
  data: RawDetail;
}

const converter = new Showdown.Converter();

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<Detail | null>(null);

  useEffect(() => {
    if (id) {
      const toSafeHtml = (value: unknown) =>
        DOMPurify.sanitize(
          converter.makeHtml(typeof value === "string" ? value : ""),
        );

      linkupAxios
        .get<RawDetailResponse>(`/posts/${id}`)
        .then((response) => {
          const payload = response.data.data;

          const convertedData = {
            title: payload.title,
            author: payload.author,
            category: payload.category,
            content: toSafeHtml(payload.content),
            like: payload.like,
            createAt: payload.createAt,
            isAccepted: payload.isAccepted,
            isLike: payload.isLike,
            isAuthor: payload.isAuthor ?? false,
            comment: (payload.comment ?? payload.comments ?? []).map(
              (comment) => ({
                commentId: comment.commentId,
                author: comment.author,
                content: toSafeHtml(comment.content),
                isAccepted: comment.isAccepted ?? false,
                createdAt: comment.createdAt,
              }),
            ),
          };
          setDetail(convertedData);
        })
        .catch((error) => {
          console.error(error);
          alert(`글을 불러오는데 실패하였습니다.`);
        });
    }
  }, [id]);

  return (
    <>
      {detail && (
        <>
          <Question
            title={detail.title}
            author={detail.author}
            category={detail.category}
            createAt={detail.createAt}
            like={detail.like}
            content={detail.content}
            isLike={detail.isLike}
            isAuthor={detail.isAuthor}
            id={id}
            isAccepted={detail.isAccepted}
          />
          {!detail.isAuthor ? <WriteAnswer id={id} /> : null}
          <TileContainer>
            <S.AnswerCountContainer>
              <Title size="xsm" weight="semibold">
                {detail.comment.length}개의 답변
              </Title>
            </S.AnswerCountContainer>
            {detail.comment.map((comment) => (
              <Answer
                key={comment.commentId}
                isAcceptedQnA={detail.isAccepted}
                author={comment.author}
                content={comment.content}
                isAccepted={comment.isAccepted}
                createdAt={comment.createdAt}
                id={id}
                ansId={comment.commentId}
                isAuthor={detail.isAuthor}
              />
            ))}
          </TileContainer>
        </>
      )}
    </>
  );
}

export default Detail;
