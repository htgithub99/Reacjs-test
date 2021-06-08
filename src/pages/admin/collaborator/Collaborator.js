import styled from 'styled-components'
import LayoutInput from './LayoutInput'
import LayoutTable from './LayoutTable'
import LayoutButton from './LayoutButton'
import Box from '../../../component/Box'

const BoxContent = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const BoxContentLeft = styled.div `
    width: 40%;
`
const BoxContentRight = styled.div`
`

export default function Collaborator ({ match }) {
    const InputFieldLeftMap = [
        {
            id: 1,
            name: 'Họ tên:'
        },
        {
            id: 2,
            name: 'Số CMND:'
        },
        {
            id: 3,
            name: 'Số tài khoản:'
        },
        {
            id: 4,
            name: 'Địa chỉ:'
        }
    ]

    const InputFieldRightMap = [
        {
            id: 5,
            name: 'Email:'
        },
        {
            id: 6,
            name: 'Tên ngân hàng:'
        },
        {
            id: 7,
            name: 'Chi nhánh:'
        },
        {
            id: 8,
            name: 'Người bảo trợ:'
        }
    ]
    return (
        <>
        <Box>
            <BoxContent>
                <BoxContentLeft>
                    <LayoutInput InputFieldLeftMap={InputFieldLeftMap} InputFieldRightMap={InputFieldRightMap}/>
                    <LayoutButton />
                </BoxContentLeft>
                <BoxContentRight>
                    <LayoutTable />
                </BoxContentRight>
            </BoxContent>
        </Box>
        </>
    )
}