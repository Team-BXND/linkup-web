import ReactQuill, { Quill } from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { renderToStaticMarkup } from "react-dom/server";
import * as S from "./style";
import type { RuleSet } from "styled-components";

import BoldIcon from "@/assets/Editor/Bold.svg?react";
import ItalicIcon from "@/assets/Editor/Italic.svg?react";
import StrikeIcon from "@/assets/Editor/Strike.svg?react";
import LinkIcon from "@/assets/Editor/Link.svg?react";
import ImageIcon from "@/assets/Editor/Image.svg?react";
import Toolbar from "./Toolbar";
import { useMemo, useRef, type Dispatch } from "react";
import { Button } from "../Button";

interface ReactQuillEditorProps {
  value?: string;
  onChange: Dispatch<React.SetStateAction<string>>;
  style?: RuleSet;
  placeholder?: string;
  buttonText: string;
  onSubmit: () => void;
}

/** 툴바의 아이콘 설정 */
const icons = Quill.import("ui/icons") as Record<string, string>;
icons["bold"] = renderToStaticMarkup(<BoldIcon />);
icons["italic"] = renderToStaticMarkup(<ItalicIcon />);
icons["strike"] = renderToStaticMarkup(<StrikeIcon />);
icons["link"] = renderToStaticMarkup(<LinkIcon />);
icons["image"] = renderToStaticMarkup(<ImageIcon />);

function TextEditor({
  value,
  onChange,
  style,
  placeholder,
  buttonText,
  onSubmit,
}: ReactQuillEditorProps) {
  const contentRef = useRef<InstanceType<typeof ReactQuill>>(null);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: "#toolbar",
        handlers: {
          bold: function (this: { quill: Quill }) {
            this.quill.format("bold", !this.quill.getFormat().bold);
          },
          italic: function (this: { quill: Quill }) {
            this.quill.format("italic", !this.quill.getFormat().italic);
          },
          underline: function (this: { quill: Quill }) {
            this.quill.format("underline", !this.quill.getFormat().underline);
          },
          strike: function (this: { quill: Quill }) {
            this.quill.format("strike", !this.quill.getFormat().strike);
          },
          image: () => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();
            input.onchange = async () => {
              const file = input.files?.[0];
              const quill = contentRef.current?.getEditor();
              const range = quill?.getSelection();

              if (!file || !quill || !range) return;

              try {
                /** TODO: 업로드 로직 */
                const imageUrl =
                  "https://cdn.crowdpic.net/detail-thumb/thumb_d_2F583E5543F7E19139C6FCFFBF9607A6.jpg";

                quill.insertEmbed(range.index, "image", imageUrl);
                quill.setSelection(range.index + 1);
              } catch (e) {
                console.error(e);
              } finally {
                input.remove();
              }
            };
          },
        },
      },
    }),
    [],
  );

  const formats = ["bold", "italic", "underline", "strike", "link", "image"];

  return (
    <S.QuillWrapper>
      <S.QuillStyle style={style} />
      <ReactQuill
        ref={contentRef}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <S.ToolbarContainer>
        <Toolbar />
        <Button type="button" size="md" color="default" onClick={onSubmit}>
          {buttonText}
        </Button>
      </S.ToolbarContainer>
    </S.QuillWrapper>
  );
}

export default TextEditor;
