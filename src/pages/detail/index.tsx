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

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState<Detail | null>(null);
  const converter = new Showdown.Converter();

  useEffect(() => {
    if (id) {
      linkupAxios
        .get<Detail>(`/posts/${id}`)
        .then((response) => {
          const convertedData = {
            ...response.data,
            content: DOMPurify.sanitize(converter.makeHtml(response.data.content)),
            comment: response.data.comment.map((comment) => ({
              ...comment,
              content: DOMPurify.sanitize(converter.makeHtml(comment.content)),
            })),
          };
          setDetail(convertedData);
        })
        .catch(() => {
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
          />
          <WriteAnswer />
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
