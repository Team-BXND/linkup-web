import styled from "styled-components";
import Logo_Row from "@/assets/Logo/LogoRow.svg?react"
import { Link } from "react-router-dom";

interface INavTab {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 36px 40px;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px
  }
`

export const Logo = styled(Logo_Row)`
  width: auto;
  height: 40px;
  cursor: pointer;
`

export const NavContainer = styled.div`
  display: flex;
  gap: -10px;
  padding: 4px;
  border-radius: 1000px;
  background-color: #0251FF4D;
`

export const NavTab = styled(Link)<INavTab>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.active ? `#3C79FF66` : `#00000000`};
  padding: 8px 30px;
  border-radius: 1000px;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4px 0px;
  }
`