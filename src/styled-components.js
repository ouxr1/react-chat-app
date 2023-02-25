import styled from "styled-components";

export const ChatContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// console.log('theme:', isDarkMode ? darkTheme : lightTheme);

export const ChatHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: #075e54;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  h3 {
    color: #fff;
  }

  span {
    font-size: 24px;
    color: #fff;
    cursor: pointer;
  }
`;

export const ChatBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.received ? 'row-reverse' : 'row'};
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  p {
    padding: 10px;
    border-radius: 20px;
    background-color: ${props => props.received ? '#dcf8c6' : '#fff'};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    color: ${props => props.theme.textColor};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  border-top: 1px solid #b2b2b2;

  input {
    width: 80%;
    height: 40px;
    border: none;
    padding: 10px;
    font-size: 16px;
    color: ${props => props.theme.textColor};
  }

  button {
    width: 20%;
    height: 40px;
    border: none;
    background-color: #128c7e;
    color: #fff;
    font-size: 16px;
    margin-left: 10px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const lightTheme = {
  backgroundColor: "#f2f2f2",
  textColor: "#333",
};

export const darkTheme = {
  backgroundColor: "#222",
  textColor: "#fff",
};
