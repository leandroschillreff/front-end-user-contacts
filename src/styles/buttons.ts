import styled, { css } from 'styled-components';

interface IThemeButtonProps {
  size: string;
  buttonColor: string;
}

export const ThemeButton = styled.button<IThemeButtonProps>`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  border-radius: 4px;
  color: var(--color-gray-0);
  cursor: pointer;

  ${(props) => {
    switch (props.size) {
      case 'large':
        return css`
          padding: 5px 10px;
        `;
      case 'small':
        return css`
          padding: 5px 15px;
        `;
      default:
        return false;
    }
  }}

  ${(props) => {
    switch (props.buttonColor) {
      case 'primary':
        return css`
          background: var(--color-primary);
          border: 2px solid var(--color-primary);

          &:hover {
            background: var(--color-primary-negative);
            border: 2px solid var(--color-primary-negative);
          }
        `;
      case 'gray-1':
        return css`
          background: var(--color-gray-1);
          border: 2px solid var(--color-gray-1);

          &:hover {
            background: var(--color-gray-2);
            border: 2px solid var(--color-gray-2);
          }
        `;
      case 'gray-3':
        return css`
          background: var(--color-gray-3);
          border: 2px solid var(--color-gray-3);

          &:hover {
            background: var(--color-gray-2);
            border: 2px solid var(--color-gray-2);
          }
        `;
      default:
        return false;
    }
  }}
`;
