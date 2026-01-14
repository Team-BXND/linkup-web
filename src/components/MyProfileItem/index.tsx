import * as S from "./style"
import { Body } from "../Text"

function MyProfileItem({ subtitle, content }: { subtitle: string; content: string | number }) {
    return (
        <S.ProfileItem>
                <S.ProfileSubtitle>
                <Body size="sm" weight="medium">{subtitle}</Body>
                </S.ProfileSubtitle>

                <S.ProfileContent subtitle={subtitle}>
                <Body size="md" weight="semibold">{content}</Body>
                </S.ProfileContent>
        </S.ProfileItem>
    );
}

export default MyProfileItem;