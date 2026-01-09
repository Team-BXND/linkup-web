import styled from "styled-components";

/* 텍스트 설정 타입 인터페이스 */
interface TypoProps {
  size: 'default' | 'lg' | 'md' | 'sm' | 'xsm';
  weight: 'bold' | 'semibold' | 'medium';
}

/**
 * theme 파일의 텍스트 스타일을 찾아 컴포넌트 형태로 반환합니다.
 * 텍스트 스타일 추가 시 variant 타입 추가 필요.
 * 
 * @param variant - 텍스트 종류(Display, Title 등)
 * 
 * @returns 텍스트 설정을 반영한 컴포넌트 형태로 반환
 * 
 * @example
 *  export const Text = createText('text');
 *  ==컴포넌트 사용 예==
 *  <Text size='lg' weight='bold'>텍스트 내용</Text>
 */
const createText = (variant: 'display' | 'title' | 'body' | 'caption') => styled.span<TypoProps>`
  font-size: ${(props) => {
    const fontSizeGroup = props.theme.typography.fontSize[variant] as Record<string, string>;

    /* Type 안정성을 위해 존재하지 않는 size의 경우 기본값 설정 */
    return fontSizeGroup[props.size] || fontSizeGroup['md'] || fontSizeGroup['default'];
  }};
  
  font-weight: ${(props) => props.theme.typography.fontWeight[props.weight] || 'medium'};
`;

/* 텍스트 컴포넌트 생성 */
export const Display = createText('display');
export const Title = createText('title');
export const Body = createText('body');
export const Caption = createText('caption');