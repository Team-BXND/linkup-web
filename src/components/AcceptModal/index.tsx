import type { Dispatch, SetStateAction } from "react";
import { Button } from "../common/Button";
import { Body } from "../common/Text";
import * as S from "./style";

function AcceptModal({
  isVisible,
  setIsVisible,
  onAccept,
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  onAccept: () => void;
}) {
  return (
    <S.Container isVisible={isVisible}>
      <Body size="md" weight="semibold">
        답변을 채택한 경우 게시글을 삭제하거나 수정할 수 없습니다. <br />
        채택 하시겠습니까?
      </Body>
      <S.Confirm>
        <Button size="md" color="default" onClick={onAccept}>
          예
        </Button>
        <Button size="md" color="default" onClick={() => setIsVisible(false)}>
          아니오
        </Button>
      </S.Confirm>
    </S.Container>
  );
}

export default AcceptModal;
