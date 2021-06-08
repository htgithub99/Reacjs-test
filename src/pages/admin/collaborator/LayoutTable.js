import styled from 'styled-components'

const Span = styled.span `
    font-size: 10px;
    line-height: 1.4;
    text-align: left;
    color: #8f9bb3;
    display: block;
`
const Table = styled.table`
    >thead {
        >tr {
            >th {
                font-size: 12px;
                font-weight: bold;
                line-height: 1.42;
                text-align: left;
                color: #707070;
                padding: 10px;
                background-color: #f2f9ff;
            }
        }
    }
    >tbody {
        >tr {
            td {
                font-size: 12px;
                font-style: normal;
                line-height: 1.42;
                text-align: left;
                padding: 10px;
                color: #000000;
            }
        }
    }
`
export default function LayoutTable () {
    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Cộng tác viên</th>
                    <th>Tài khoản ngân hàng</th>
                    <th>Email</th>
                    <th>Người giới thiệu</th>
                    <th>Mã giới thiệu</th>
                    <th>Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BS198756</td>
                    <td>
                        Hoàng Văn K
                        <Span>132299102</Span>
                    </td>
                    <td>
                        Vietcombank - Chương dương
                        <Span>0301000358315</Span>
                    </td>
                    <td>ctv@gmail.com</td>
                    <td>
                        Hoàng Công Minh
                        <Span>BS65325</Span>
                    </td>
                    <td>BSC48169784</td>
                    <td>Xác nhận</td>
                </tr>
            </tbody>
        </Table>
    )
}