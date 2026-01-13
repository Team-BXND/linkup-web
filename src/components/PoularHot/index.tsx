import * as S from './style';
import { Title } from '../Text';
import QuestionItem from '../QuestionItem';
import { publicAxios } from '@/libs/customAxios';
import { useState, useEffect } from 'react';
import type { PopularHotResponse } from '@/types/popularHot';

const SERVER_URL = import.meta.env.VITE_SERVER_URL

function PopularHot() {
  const [popularHotData, setPopularHotData] = useState<PopularHotResponse>({
    data: [],
    meta: {
      total: 0,
      page: 1,
      pageSize: 0,
      totalPages: 0,
      hasNext: false,
      hasPrevious: false,
    },
  });

  useEffect(() => {
    publicAxios
      .get(`${SERVER_URL}/popular/hot`, {
        params: {
          page: 5,
        },
      })
      .then((response) => {
        setPopularHotData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <S.Container>
      <Title size="md" weight="bold">
        🔥 지금 뜨거운 Q&A
      </Title>
      <S.QuestionsList>
        {popularHotData.data.map((item, key) => (
          <QuestionItem item={item} index={key} showRank={true}></QuestionItem>
        ))}
      </S.QuestionsList>
    </S.Container>
  );
}

export default PopularHot;
