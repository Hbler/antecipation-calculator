import styled from "styled-components";

export const SMain = styled.main`
  .container {
    min-height: 90vh;
    border: 1px solid red;

    gap: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 2rem;
      font-weight: 300;
      text-transform: uppercase;
    }

    form {
      width: 50%;

      button {
        width: 50%;
      }
    }
  }
`;
