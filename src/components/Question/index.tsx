import RoundButton from "../common/RoundButton";
import { Body, Caption, Title } from "../common/Text";
import * as S from "./style";
import TileContainer from "@/components/common/TileContainer";
import ThumbsUp from "@/assets/Like/Thumbsup.svg?react";

function Question() {
  return (
    <TileContainer>
      <S.Container>
        <S.TitleArea>
          <S.TitleContainer>
            <S.QuestionIcon size="lg" weight="bold">
              Q
            </S.QuestionIcon>
            <Title size="md" weight="bold">
              {
                "React에서 useState와 useEffect를 함께 사용할 때 무한 루프가 발생하는 이유는?"
              }{" "}
              {/**TODO: 서버 데이터 연결*/}
            </Title>
          </S.TitleContainer>
          <S.MetaContainer>
            <Caption size="lg" weight="medium">
              {"사랑하게될거야 님"} {/**TODO: 서버 데이터 연결*/}
            </Caption>
            <Caption size="lg" weight="medium">
              {"코딩"} {/**TODO: 서버 데이터 연결*/}
            </Caption>
            <Caption size="lg" weight="medium">
              {"작성일 : 2026-01-01"} {/**TODO: 서버 데이터 연결*/}
            </Caption>
            <Caption size="lg" weight="medium">
              {"유용해요 : 1개"} {/**TODO: 서버 데이터 연결*/}
            </Caption>
          </S.MetaContainer>
        </S.TitleArea>
        <RoundButton size="md" color="default">
          <ThumbsUp />
        </RoundButton>
        {/**TODO: isLike 상태에 따른 색상 변경*/}
      </S.Container>
      <S.Contents>
        <Body size="md" weight="medium">
          {`안녕하세요! 현재 프론트엔드 개발자를 꿈꾸며 리액트를 공부하고 있는 고등학생입니다.
최근 학교 동아리 프로젝트로 웹 서비스를 만들다가 도저히 이해가 안 가는 현상이 있어서 질문드립니다. 
단순히 해결법만 아는 것보다, 내부에서 '왜' 이런 일이 일어나는지 정확한 라이프사이클 흐름을 이해하고 싶어서 글을 남깁니다.
1. 문제 상황 API에서 데이터를 받아와서 state에 저장하고 화면에 뿌려주는 기능을 구현하고 있었습니다. 
그런데 코드를 실행하자마자 크롬 브라우저가 멈춰버리고, 콘솔에는 로그가 미친 듯이 찍히면서 결국 "Maximum update depth exceeded" 에러가 떴습니다.
2. 문제가 된 코드 대략적인 코드는 아래와 같습니다
JavaScript
import React, { useState, useEffect } from 'react';`}
          {/** TODO: 서버 데이터 연결 */}
        </Body>
      </S.Contents>
    </TileContainer>
  );
}

export default Question;
