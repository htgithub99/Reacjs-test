import styled from 'styled-components'

const Button = styled.button`
    padding: 10px 28px;
    border-radius: 6px;
    background-color: ${(props) => (props.white ? '#147afa' : '#dddddd')};
    font-size: 14px;
    font-weight: 600;
    margin-right: ${(props) => (props.white ? '30px' : '0')};
    line-height: 1.36;
    text-align: center;
    color: ${(props) => (props.white ? '#ffffff' : '#707070')};
    font-family: 'Lobster', cursive;
`

export default Button