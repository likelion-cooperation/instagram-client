import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const FeedContainer = styled.div`
    width: 630px;
    height: 100vh;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 15px; 
`;

export const FeedItem = styled.div`
    border: none;
    margin-bottom: 20px;
    padding: 10px;
    width: 470px;
`;

export const UserNameContainer = styled.div`
    width: 470px;
    height: 55.99px;
    align-items: left;
    box-sizing: border-box;
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center; 
    padding: 0 10px;
`;

export const User = styled.div`
    width: 380px;
    height: 40px;
    display: flex; 
    align-items: center;
    
`;

export const Profileimg = styled.a`
    width: 41.99px;
    height: 41.99px;
    background-image: ${({ $test }) => `url('${$test}')`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    border-radius: 50%;
`;

export const UserInfo = styled.div`
    width: 380px;
    height: 40px;
    margin-left: 10px;
    display: flex; 
    align-items: center;

  & > a {
    padding: 2px;
    color: rgb(38, 38, 38);
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    }

  & > span {
    margin-left: 10px;
    }
`;

export const Plus = styled.div`
    float: right;
    size: 39.99px 39.99px;
    padding: 8px;
    cursor: pointer;
`;

export const FeedImage = styled.div`
    width: 468px;
    height: 468px;
    align-items: center;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const ButtonLine = styled.div`
    height: 37.98px;
`;

export const HeartButton = styled.div`
    float: left;
    padding: 8px;
    cursor: pointer;
`;

export const CommentButton = styled.div`
    float: left;
    padding: 8px;
    cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;
  }
`;

export const DirectButton = styled.div`
    float: left;
    padding: 8px;
    cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;
  }
`;

export const BookmarkButton = styled.div`
    float: right;
    padding: 8px;
    cursor: pointer;

  & > img {
    width: 20px;
    height: 20px;
  }
`;

export const HeartLine = styled.div`
    display: flex;
    align-items: center;
    width: 470px;
    align-self: center;

  & > span {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-left: 10px;
    white-space: pre-wrap;
  }

  & > span > b {
    margin-right: 4px;
    font-weight: 500; 
  }
`;

export const ProfileAnchor = styled(AccountCircleIcon)`
    cursor: pointer;
    border-radius: 50%;
    margin-left: 10px;
    color: gray;
`;


export const FeedCommnet = styled.div`
    width: 380px;
    height: 40px;
    margin-left: 10px;
    display: flex;
    align-items: center;

  & > a {
    padding: 2px;
    color: rgb(38, 38, 38);
    font-size: 14px;
    text-decoration: none;
    font-weight: 650;
    cursor: pointer;
    }

  & > span {
    margin-left: 5px;
    font-size: 14px;
    }
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size:14px;
    width: 380px;
    height: 40px;
    margin-left: 10px;
    padding:2px;;
    margin-top: 8px;

  & > div > a {
    padding: 2px;
    color: rgb(38, 38, 38);
    text-decoration: none;
    font-weight: 630;
    cursor: pointer;
    margin-bottom: 4px;
    }

  & > div > span {
    margin-left: 5px;
    }

  & > div > div > img {
    width: 10px;
    height: 10px;
    }
`;

export const CommentInput = styled.div`
    input {
    width: 450px;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    margin-top: 8px;
    overflow: hidden;
  }
`;

export const PlusComment = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 14px;
    margin-top: 8px;
    position: relative;

  & > button {
    border: none;
    background: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
    color: gray;
    font-size: 14px;
  }
`;
