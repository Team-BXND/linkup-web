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
 * const [page, setPage] = useState(1); //type은 number
 * <Pagination page={page} setPage={setPage} totalPage={10}
 */

function Pagination(props: PaginationProps) {
  const isAbb = () => {
    const showCount = 4;
    let start;
    let isFirst;
    let end;
    let abb;

    if (props.totalPage > 4) {
      if (props.totalPage - props.page < 4) {
        start = props.totalPage - 5;
        end = props.totalPage;
        abb = false;
      } else {
        if (props.page === 1) {
          start = props.page - 1;
          isFirst = true;
        } else {
          start = props.page - 2;
          isFirst = false;
        }
        if (isFirst) {
          end = props.page + showCount - 1;
        } else {
          end = props.page + showCount - 2;
        }
        abb = true;
      }
    } else {
      start = 0;
      end = props.totalPage;
      abb = false;
    }

    return { start, end, abb };
  };

  let meta: Meta = isAbb();

  const setPrevious = () => {
    if (props.page !== 1) {
      props.setPage((prev) => prev - 1);
    }
  };

  const setNext = () => {
    if (props.page < props.totalPage) {
      props.setPage((prev) => prev + 1);
    }
  };

  const setPage = (page: number) => {
    if (page === props.page) {
      return;
    }
    if (1 <= page && page <= props.totalPage) {
      props.setPage(page);
    }
  };

  return (
    <S.Container>
      <S.ArrowContainer disabled={props.page === 1}>
        <S.LeftArrow />
        <Caption size="lg" weight="medium" onClick={setPrevious}>
          Previous
        </Caption>
      </S.ArrowContainer>
      {meta &&
        Array.from({ length: meta.end - meta.start }, (_, index) => {
          index = meta.start + index + 1;
          return (
            <S.Page
              key={index}
              active={props.page === index}
              onClick={() => setPage(index)}
            >
              {index}
            </S.Page>
          );
        })}
      {meta && meta.abb ? "..." : null}
      {meta && meta.abb ? (
        <S.Page
          active={props.page === props.totalPage}
          onClick={() => setPage(props.totalPage)}
        >
          {props.totalPage}
        </S.Page>
      ) : null}
      <S.ArrowContainer disabled={props.page === props.totalPage}>
        <Caption size="lg" weight="medium" onClick={setNext}>
          Next
        </Caption>
        <S.RightArrow />
      </S.ArrowContainer>
    </S.Container>
  );
}

export default Pagination;
