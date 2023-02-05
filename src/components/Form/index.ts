import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 290px;
  max-width: 290px;
  padding: 2rem 2rem;
  border-radius: 8px;
  background: var(--color-gray-3);
  gap: 0.5rem;
  @media (min-width: 520px) {
    max-width: 400px;
    min-width: 400px;
  }
`;

export const ThemeLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--color-gray-0);
`;

export const ThemeInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--color-gray-0);
  padding: 5px 16px 5px 16px;
  border: 1px solid var(--color-gray-2);
  border-radius: 4px;
  background: var(--color-gray-2);
  &:focus {
    border: 1px solid var(--color-gray-0);
  }
`;

export const ThemeSelect = styled.select`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--color-gray-0);
  padding: 5px 16px 5px 16px;
  border: 1px solid var(--color-gray-2);
  border-radius: 4px;
  background: var(--color-gray-2);
  &:focus {
    border: 1px solid var(--color-gray-0);
  }
  option {
    gap: 0.5rem;
  }
`;
