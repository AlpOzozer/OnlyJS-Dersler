import styled from 'styled-components';


const buttonBg = {
  primary: "#BF4F74",
  secondary: "#278ab8",
}

const buttonColor = {
  primary: "#fff",
  secondary: "#278ab8",
}


export const Button = styled.button`
  background-color: ${(props) => buttonBg[props.color] || props.color || "#fff"};
  color: ${(props) => buttonColor[props.textColor] || props.textColor || "#000"};
  border-radius: 3px;
  border: 2px solid #BF4F74;
  
  margin: 0 1em;
  padding: 0.25em 1em;
  `;

export const ButtonWithShadow = styled(Button)`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const SubmitButton = styled(ButtonWithShadow)`
    background: #2A7B9B;
    background: linear-gradient(90deg, rgba(42, 123, 155, 1) 0%,
     rgba(87, 199, 133, 1) 45%,
      rgba(237, 221, 83, 1) 100%);
`;