import styled, { css } from "styled-components";
import { colorVariant } from "./Color";
interface ButtonProps {
  color?: string;
}

export const ButtonCom = styled.button<ButtonProps>`
  border: "1px solid #BF4F74";
  border-radius: "15px";

  appearance: none;
  backface-visibility: hidden;
  background-color: ${(props) => colorVariant(props.color).backgroundColor};
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(39, 174, 96, 0.15) 0 4px 9px;
  box-sizing: border-box;
  color: ${(props) => colorVariant(props.color).color};
  cursor: pointer;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.5;
  outline: none;
  overflow: hidden;
  padding: 13px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 0.3s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: top;
  white-space: nowrap;

  &:hover {
    box-shadow: rgba(39, 174, 96, 0.3) 0 4px 9px; // Adjusted box-shadow for hover
    transform: translate3d(
      0,
      -1px,
      0
    );
`;
