import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: var(--color-gray-2);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    & > button {
      display: flex;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      border-radius: 4px;
      background: var(--color-gray-2);
      border: 2px solid var(--color-gray-2);
      color: var(--color-gray-0);
      padding: 5px;
      cursor: pointer;
      &:hover {
        background: var(--color-gray-3);
        border: 2px solid var(--color-gray-3);
      }
    }
  }
  & > form {
    padding: 0;
    gap: 0;
    .form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 15px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;
