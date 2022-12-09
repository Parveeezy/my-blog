import {Button, styled} from "@mui/material";

export const PostWrapper = styled('div')`
  max-width: 1280px;
  margin: 0 auto;
`;

export const PostsBlockWrapper = styled('div')`
  
`;

export const PostsTitleAddBlock = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const PostTitle = styled('h1')`
  margin-right: 15px;
  padding: 15px 0;
  font-size: 2.5rem;
`;

export const PostAddButton = styled(Button)`
  background-image: linear-gradient(to right, #E6DADA 0%, #274046 51%, #E6DADA 100%);
  text-align: center;
  line-height: 0;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 20px;
  display: block;
  font-weight: bold;
  font-size: 30px;
  height: 50px;
  
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;

export const PostElement = styled('div')`
  max-width: 800px;
  border: 3px solid transparent;
  padding: 15px 20px;
  margin: 30px auto;
  box-shadow: 0 0 31px 9px rgb(152 138 138 / 62%);
`;

export const PostElementTitle = styled('h2')`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const PostElementContent = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`;

export const PostElementDescription = styled('p')`
  display: inline-block;
  font-size: 18px;
  padding: 8px;
  text-align: start;
  width: 80%;
`;

export const PostElementButton = styled(Button)`
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

  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;


