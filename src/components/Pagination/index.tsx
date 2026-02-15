import { type Dispatch, type SetStateAction } from "react";
import { Caption } from "../common/Text";
import * as S from "./style";

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}

interface Meta {
  start: number;
  end: number;
  abb: boolean;
}

/**
 * 페이지네이션 컴포넌트입니다.
 * 페이지 이동에 맞추어 전달된 useState 값이 변화합니다.
 *
 * @param page : useState의 변수, 현재 페이지를 나타냄
 * @param setPage : useState의 set함수
 * @param totalPage : 총 페이지 수
 *
 * @example
 * const [page, setPage] = useState(0); //type은 number
 * <Pagination page={page} setPage={setPage} totalPage={10}
 */

function Pagination(props: PaginationProps) {
  const lastPage = Math.max(props.totalPage - 1, 0);

  const isAbb = (): Meta => {
    const showCount = 5;
    let start = Math.max(0, props.page - 1);
    const end = Math.min(lastPage, start + showCount - 1);

    if (end - start + 1 < showCount) {
      start = Math.max(0, end - showCount + 1);
    }

    return { start, end, abb: end < lastPage };
  };

  const meta = isAbb();

  const setPrevious = () => {
    if (props.page > 0) {
      props.setPage((prev) => prev - 1);
    }
  };

  const setNext = () => {
    if (props.page < lastPage) {
      props.setPage((prev) => prev + 1);
    }
  };

  const setPage = (page: number) => {
    if (page === props.page) {
      return;
    }
    if (0 <= page && page <= lastPage) {
      props.setPage(page);
    }
  };

  if (props.totalPage <= 0) {
    return null;
  }

  return (
    <S.Container>
      <S.ArrowContainer disabled={props.page === 0}>
        <S.LeftArrow />
        <Caption size="lg" weight="medium" onClick={setPrevious}>
          Previous
        </Caption>
      </S.ArrowContainer>
      {meta &&
        Array.from({ length: meta.end - meta.start + 1 }, (_, index) => {
          index = meta.start + index;
          return (
            <S.Page
              key={index}
              active={props.page === index}
              onClick={() => setPage(index)}
            >
              {index + 1}
            </S.Page>
          );
        })}
      {meta && meta.abb ? "..." : null}
      {meta && meta.abb ? (
        <S.Page
          active={props.page === lastPage}
          onClick={() => setPage(lastPage)}
        >
          {lastPage + 1}
        </S.Page>
      ) : null}
      <S.ArrowContainer disabled={props.page === lastPage}>
        <Caption size="lg" weight="medium" onClick={setNext}>
          Next
        </Caption>
        <S.RightArrow />
      </S.ArrowContainer>
    </S.Container>
  );
}

export default Pagination;
