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
    background-color: ${props => (props.color === 1 ? '#04d587' : props.color === 2 ? '#e2c401' :  props.color === 3 ? '#ff5d7f' :  props.color === 4 ? '#2b4def' : '')};
    width: 230px;
    >img {
        width: 36px;
        height: 36px;
        object-fit: contain;
        margin-bottom: 10px;
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