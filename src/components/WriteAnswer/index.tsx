import { useState } from "react";
import TextEditor from "../common/TextEditor";
import * as S from "./style";
import { linkupAxios } from "@/libs/customAxios";

function WriteAnswer({ id }: { id?: string }) {
  const [content, setContent] = useState("");
  const onSubmit = (markdown: string) => {
    linkupAxios
      .post(`/posts/${id}/answer`, {
        content: markdown,
      })
      .then(() => {
        alert("댓글 등록이 완료되었습니다.");
        location.reload();
      })
      .catch(() => {
        alert("댓글을 작성하지 못했습니다. 잠시 후 다시 시도해주세요.");
      });
  };
  return (
    <S.Container>
      <TextEditor
        value={content}
        onChange={setContent}
        style={S.editorStyle}
        placeholder="답변을 입력하세요"
        buttonText="답변달기"
        onSubmit={onSubmit}
      />
    </S.Container>
  );
}

export default WriteAnswer;
