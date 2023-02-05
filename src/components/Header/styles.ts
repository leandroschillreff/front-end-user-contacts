import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  min-height: 5rem;
  align-items: center;

  .container_header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;

    .header__user {
      display: inline-block;
      width: 100px;
      height: 100px;
      position: relative;

      cursor: pointer;

      :hover .header_buttons {
        display: flex;
        flex-direction: column;
      }

      .header_buttons {
        display: none;
        width: 100%;
        position: absolute;
        right: 10px;
        z-index: 1;
        gap: 10px;
      }
    }
  }
`;
