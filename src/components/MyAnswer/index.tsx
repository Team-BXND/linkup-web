import * as S from './style';
import type { ProfileMyAnswer } from '@/types/profile';
import MyAnswerItem from '../MyAnswerItem';
import { myAnswer } from '@/constants/profile.constants.ts';
import { Title, Caption } from '../Text';

function MyAnswer({item}: {item: ProfileMyAnswer}){
    return(
        <S.MyAnswer>

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
        </S.MyAnswer>

    )
}

export default MyAnswer;