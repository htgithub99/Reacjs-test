import styled from 'styled-components'
import Button from '../../../component/Button'

const Action = styled.div`
    text-align: center;
    margin: 0 0 30px 0;
`
export default function LayoutButton () {
    return (
        <Action>
            <Button white type="submit">Lưu</Button>
            <Button type="button">Hủy</Button>
        </Action>
    )
}