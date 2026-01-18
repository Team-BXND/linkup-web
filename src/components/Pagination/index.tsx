import * as S from "./style";
import { Body } from "../common/Text";
import { Caption } from "../common/Text";
import ArrowLeftImg from "@/assets/Pagination/ArrowLeft.svg";
import ArrowRightImg from "@/assets/Pagination/ArrowRight.svg";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onChangePage,
}: PaginationProps) {

  const pages =
    totalPages <= 7
      ? Array.from({ length: totalPages }, (_, i) => i + 1)
      : currentPage <= 3
      ? [1, 2, 3, "...", totalPages - 1, totalPages]
      : currentPage >= totalPages - 2
      ? [1, "...", totalPages - 2, totalPages - 1, totalPages]
      : [
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
  return (
    <S.Container>
      <S.PageControlBox
        onClick={() => {
          if (currentPage > 1) onChangePage(currentPage - 1);
        }}
      >
        <S.ArrowIcon src={ArrowLeftImg} />
        <Caption size="lg" weight="medium">
          Previous
        </Caption>
      </S.PageControlBox>

      {pages.map((p, i) =>
        p === "..." ? (
          <Body size="default" weight="bold" key={i}>
            ...
          </Body>
        ) : (
          <S.PaginatonButton
            $active={currentPage === p}
            key={i}
            onClick={() => onChangePage(p as number)}
          >
            {p}
          </S.PaginatonButton>
        )
      )}
      <S.PageControlBox
        onClick={() => {
          if (currentPage < totalPages) onChangePage(currentPage + 1);
        }}
      >
        <Caption size="lg" weight="medium">
          Next
        </Caption>
        <S.ArrowIcon src={ArrowRightImg} />
      </S.PageControlBox>
    </S.Container>
  );
}

export default Pagination;
