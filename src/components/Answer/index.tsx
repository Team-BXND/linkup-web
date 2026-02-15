import { Body, Caption, Title } from "../common/Text";
import * as S from "./style";
import TileContainer from "@/components/common/TileContainer";
import { Button } from "../common/Button";
import { linkupAxios } from "@/libs/customAxios";
import AcceptModal from "../AcceptModal";
import { useState } from "react";

interface AnswerProps {
  isAcceptedQnA: boolean;
  author: string;
  content: string;
  isAccepted: boolean;
  createdAt: string;
  id?: string;
  ansId: number;
  isAuthor: boolean;
}

function Answer(props: AnswerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const handleAccept = () => {
    linkupAxios
      .post(`/posts/${props.id}/accept/${props.ansId}`)
      .then(() => {
        setIsVisible(false);
        window.location.reload();
      })
      .catch((e) => {
        console.error(e);
        alert("채택 중 오류가 발생했습니다.");
      });
  };
  return (
    <TileContainer enable={props.isAccepted}>
      <S.Container>
        <S.TitleArea>
          <S.TitleContainer>
            <S.AnswerIcon size="md" weight="bold">
              A
            </S.AnswerIcon>
            <Title size="sm" weight="bold">
              {`${props.author}님의 답변`}
            </Title>
          </S.TitleContainer>
          {!props.isAcceptedQnA && props.isAuthor ? (
            <S.ButtonWrapper>
              <Button
                size="lg"
                color="default"
                onClick={() => setIsVisible(true)}
              >
                채택하기
              </Button>
              <AcceptModal
                isVisible={isVisible}
                setIsVisible={setIsVisible}
                onAccept={handleAccept}
              />
            </S.ButtonWrapper>
          ) : null}
        </S.TitleArea>
        {/**TODO: 채택 상태에 따른 뷰 변경*/}
      </S.Container>
      <S.Contents>
        <Body
          as="div"
          size="md"
          weight="medium"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </S.Contents>
      <S.MetaContainer>
        <Caption size="lg" weight="medium">
          작성일 : {props.createdAt}
        </Caption>
      </S.MetaContainer>
    </TileContainer>
  );
}

export default Answer;
