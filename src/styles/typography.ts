import styled, { css } from 'styled-components';
import { BaseTitle } from './components/BaseTitle';

interface IThemeTitleProps {
  titleSize: string;
  // className: any;
  color: string;
}

export const ThemeTitle = styled(BaseTitle)<IThemeTitleProps>`
  font-weight: 700;
  ${(props) => {
    switch (props.titleSize) {
      case 'title1':
        return css`
          font-size: 26px;
          line-height: 34px;
        `;
      case 'title3':
        return css`
          font-size: 18px;
          line-height: 24px;
        `;
      case 'title4':
        return css`
          font-size: 14px;
          line-height: 24px;
        `;
      default:
        return false;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case 'primary':
        return css`
          color: var(--color-primary);
        `;
      case 'white':
        return css`
          color: var(--color-gray-0);
        `;
      case 'gray':
        return css`
          color: var(--color-gray-50);
        `;
      default:
        return false;
    }
  }}
`;

export const ThemeText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: var(--color-gray-1);
`;

export const ThemeErrorForm = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--color-negative);
`;
