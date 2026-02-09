import { useEffect, useState } from "react";
import TextEditor from "../common/TextEditor";
import * as S from "./style";

function WriteAnswer() {
  const [content, setContent] = useState("");
  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <S.Container>
      <TextEditor
        value={content}
        onChange={setContent}
        style={S.editorStyle}
        placeholder="답변을 입력하세요"
        buttonText="답변달기"
      />
    </S.Container>
  );
}

export default WriteAnswer;
