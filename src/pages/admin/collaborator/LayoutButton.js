import styled from 'styled-components'
import Button from '../../../component/Button'

const Action = styled.div`
    text-align: center; 
`
export default function LayoutButton () {
    return (
        <Action>
            <Button white>Lưu</Button>
            <Button>Hủy</Button>
        </Action>
    )
}