import * as S from './style';
import { Caption } from '../Text';
import answer from '@/assets/Profile/answer.png';
import like from '@/assets/Profile/answer.png';

function QuestionMeta({likeCount, answerCount}: {likeCount: number, answerCount: number}) {
    return (
        <S.QuestionMeta>

            <S.MetaItem>
                <S.Icon src={like} alt="like icon" />
                <S.Text>
                <Caption size="md" weight="medium">좋아요 {likeCount}</Caption>
                </S.Text>
            </S.MetaItem>

            <S.MetaItem>
                <S.Icon src={answer} alt="answer icon" />
                <S.Text>
                <Caption size="md" weight="medium">답변 {answerCount}</Caption>
                </S.Text>
            </S.MetaItem>
            
        </S.QuestionMeta>
    );
}

export default QuestionMeta;