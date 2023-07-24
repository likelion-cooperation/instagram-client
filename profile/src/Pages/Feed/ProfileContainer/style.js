import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const RightBody = styled.div`
  position: fixed;
  left: 984px;
  padding:30px 0;
  width:319px;
  height:657px;
  margin:0 0 30px;
  z-index: 1;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 4px 10px 0;
  width: 319px;
`;

export const ProfileImg = styled.a`
  width: 56px;
  height: 56px;
  background-image: ${({ $test }) => `url('${$test}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 10px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: rgb(0, 0, 0);
  flex-direction: column;
  align-items: flex-start;
  margin-left: 6px;


  & > a {
    display: flex;
    align-items: center;
    flex-grow: 1;
    color: rgb(0, 0, 0);
    text-decoration: none;
    text-align: left;
    font-weight: 600; 
    cursor: pointer;
  }

  & > span {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    color: rgb(115, 115, 115);
    text-align: left;
  }
`;

export const Recommend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 4px 10px 0;
  width: 319px;
`;

export const Title = styled.div`
  height: 11px;
  padding: 4px 16px;
  display: flex;
  width: 319px;
  font-size: 14px;
  margin-bottom: 10px;

  & > a {
    flex-grow: 1;
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
    display: inline-flex;
    justify-content: flex-end;
    cursor: pointer;
  }

  & > span {
    flex-shrink: 0;
    color: rgb(115, 115, 115);
    text-align: left;
    display: inline;
  }
`;

export const Profilelist = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 4px 10px 0;
  width: 319px;

  & > div > span {
    font-size: 12px;
  }
`;

export const ProfileAnchor = styled(AccountCircleIcon)`
  cursor: pointer;
  border-radius: 50%;
  margin-left: 10px;
  color: gray;
`;

export const Follow = styled.a`
    flex-grow: 1;
    color: rgb(0, 149, 246);
    text-decoration: none;
    font-weight: 600;
    font-size: 12px;
    display: inline-flex;
    justify-content: flex-end;
    cursor: pointer;
`;
