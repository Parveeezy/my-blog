import {Button, styled, TextField} from "@mui/material";



export const NewPostWrapper = styled("div")`
  display: block;
  max-width: 900px;
  margin: 0 auto;
  height: 500px;
  background-color: rgba(116, 121, 116, 0.45);
`;

export const NewPostInput = styled(TextField)`
  width: 50%;
  margin-top: 50px;
  background-color: #75706b;
  color: #d2b4b4;

  & input {
    color: white;

    &::placeholder {
      color: #e8e1d9;
    }
  }
`;

export const NewPostDescriptionWrapper = styled("div")`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const NewPostDescription = styled(TextField)`
  margin-bottom: 20px;
  width: 50%;
  background-color: #75706b;
  color: white;

  & input {
    color: white;

    &::placeholder {
      color: #e8e1d9;
    }
  }
`;

export const NewPostAddButton = styled(Button)`
  background-image: linear-gradient(to right, #E6DADA 0%, #274046 51%, #E6DADA 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  font-weight: bold;
  font-size: 25px;

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;