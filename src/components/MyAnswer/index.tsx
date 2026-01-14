import * as S from './style';
import type { ProfileMyAnswer } from '@/types/profile';
import MyAnswerItem from '../MyAnswerItem';
import { Title,Body,Caption } from '../Text';
import { myAnswer } from '@/constants/profile.constants.ts';

function MyAnswer({item}: {item: ProfileMyAnswer}){
    return(
        <S.MyAnser>
            <S.TitleCover>
                <Title size="md" weight="bold">내 답변</Title>
                <S.More>
                <Caption size="sm" weight='medium'>더보기</Caption>
                </S.More>
            </S.TitleCover>

            <S.DetailCover>
                {myAnswer.data.map((item)=>(
                    <MyAnswerItem key={item.id} item={item}/>
                ))}
            </S.DetailCover>


        </S.MyAnser>
    )
}

export default MyAnswer;