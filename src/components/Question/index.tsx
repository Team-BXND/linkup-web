import RoundButton from "../common/RoundButton";
import { Body, Caption, Title } from "../common/Text";
import * as S from "./style";
import TileContainer from "@/components/common/TileContainer";
import ThumbsUp from "@/assets/Like/ThumbsUp.svg?react";
import { linkupAxios } from "@/libs/customAxios";
import { useNavigate } from "react-router-dom";
import { Button } from "../common/Button";

interface QuestionProps {
  title: string;
  author: string;
  category: string;
  createAt: string;
  like: number;
  content: string;
  isLike: boolean;
  isAuthor: boolean;
  id?: string;
}

function Question({
  title,
  author,
  category,
  createAt,
  like,
  content,
  isLike,
  isAuthor,
  id,
}: QuestionProps) {
  const navigate = useNavigate();

  const handleLike = () => {
    if (id) {
      linkupAxios
        .post(`/posts/${id}/like`)
        .then(() => {
          location.reload();
        })
        .catch(() => {
          alert("유용해요를 표시하지 못했습니다. 잠시 후 다시 시도해 주세요");
        });
    }
  };

  return (
    <TileContainer>
      <S.Container>
        <S.TitleArea>
          <S.TitleContainer>
            <S.QuestionIcon size="lg" weight="bold">
              Q
            </S.QuestionIcon>
            <Title size="md" weight="bold">
              {title}
            </Title>
          </S.TitleContainer>
          <S.MetaContainer>
            <Caption size="lg" weight="medium">
              {author} 님
            </Caption>
            <Caption size="lg" weight="medium">
              {category}
            </Caption>
            <Caption size="lg" weight="medium">
              작성일 : {createAt}
            </Caption>
            <Caption size="lg" weight="medium">
              유용해요 : {like}개
            </Caption>
          </S.MetaContainer>
        </S.TitleArea>
        {isAuthor ? (
          <S.Toolbar>
            <Button
              size="md"
              color="default"
              onClick={() => navigate(`/editor/${id}`)}
            >
              수정
            </Button>
            <Button size="md" color="default">
              삭제
            </Button>
          </S.Toolbar>
        ) : (
          <RoundButton
            size="md"
            color={isLike ? "negative" : "default"}
            onClick={handleLike}
          >
            <ThumbsUp />
          </RoundButton>
        )}
      </S.Container>
      <S.Contents>
        <Body
          as="div"
          size="md"
          weight="medium"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </S.Contents>
    </TileContainer>
  );
}

export default Question;
