import styled from 'styled-components';

export const StyledDashBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .container_user {
    display: flex;
    width: 100%;
    min-height: 7rem;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 620px) {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
  .container_technology {
    display: flex;
    width: 100%;
    min-height: 5rem;
    justify-content: space-between;
    align-items: center;
  }
`;
