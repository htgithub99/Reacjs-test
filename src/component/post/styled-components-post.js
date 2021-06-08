import styled from 'styled-components'
const Box = styled.div `
    display: flex;
    flex-wrap: wrap;
`
const BoxChild = styled.div`
    margin: 30px auto;
    cursor: pointer;
    padding: 25px 30px;
    text-align: center;
    border-radius: 10px;
    background-color: ${props => (props.greenColor ? '#04d587' : '')};
    width: 230px;
    >img {
        width: 36px;
        height: 36px;
        object-fit: contain;
    }
    >h4 {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.33;
        margin: 0;
        text-align: center;
        color: #ffffff;
      }
    }
`

const ContainerElement = styled.div`
    max-width: 1310px;
    margin: 0 auto;
`

// eslint-disable-next-line
export default { BoxChild, ContainerElement, Box }