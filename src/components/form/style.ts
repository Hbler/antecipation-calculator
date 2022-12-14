import styled from "styled-components";

export const SForm = styled.form`
  width: 80%;
  padding: 0.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  border: 2px solid;
  border-radius: 5px;
  border-color: ${({ theme: { primary } }) => primary};
  background-color: ${({ theme: { secondary } }) => secondary};

  .checkboxes {
    width: 100%;

    display: flex;

    div {
      flex-direction: column-reverse;
      align-items: flex-start;

      input {
        height: 20px;
      }
    }
  }
`;
