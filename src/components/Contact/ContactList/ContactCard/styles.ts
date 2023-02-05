import styled from 'styled-components';

export const StyledContactCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: var(--color-gray-4);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: var(--color-gray-3);
  }
`;
