import styled, { css } from 'styled-components';
import { buttoncolor } from '../../styles/color';
import fontSize from '../../styles/fontSize';
const { big, medium } = fontSize;
const commonStyle = css`
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
`;
export const MidButton = styled.button`
  font-size: ${medium};
  height: 40px;
  ${commonStyle}

  ${({ color }) =>
    buttoncolor[color] &&
    css`
      background: ${buttoncolor[color][0]};
      color: ${buttoncolor[color][1]};
      border: 1px solid ${buttoncolor[color][2]};
    `}
`;
export const BigButton = styled.button`
  font-size: ${big};
  height: 45px;
  ${commonStyle}

  ${({ color }) =>
    buttoncolor[color] &&
    css`
      background: ${buttoncolor[color][0]};
      color: ${buttoncolor[color][1]};
      border: 1px solid ${buttoncolor[color][2]};
    `}
`;

export const ButtonGroup = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  margin: 20px auto;

  button {
    width: 0;
    flex-grow: 1;
  }

  button + button {
    margin-left: 5px;
  }
`;
