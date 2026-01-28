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
      <TextEditor value={content} onChange={setContent} style={S.editorStyle} />
    </S.Container>
  );
}

export default WriteAnswer;
