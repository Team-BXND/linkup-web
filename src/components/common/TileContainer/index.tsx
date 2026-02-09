import * as S from "./style";
import { Title } from "@/components/common/Text";
import type { ReactNode } from "react";

/**
 * @param title 컴포넌트 상단 제목 (미작성 시 숨김)
 * @param enable 활성화 시 메인 컬러 테두리 적용 (default: false)
 * @example
 * <TileContainer title="제목" enable={true}>
 * 내용
 * </TileContainer>
 */

function TileContainer({
  title,
  enable,
  children,
  className,
}: {
  title?: string;
  enable?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <S.TileContainer enable={enable ?? false} className={className}>
      {title ? (
        <S.TitleContainer>
          <Title size="md" weight="bold">
            {title}
          </Title>
        </S.TitleContainer>
      ) : null}
      {children}
    </S.TileContainer>
  );
}

export default TileContainer;
