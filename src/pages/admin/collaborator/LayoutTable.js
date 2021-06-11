import styled from 'styled-components'
import * as _ from 'lodash'

const Span = styled.span `
    font-size: 10px;
    line-height: 1.4;
    text-align: left;
    color: #8f9bb3;
    display: block;
`

const Button = styled.button`
    color: #36f;
    border-radius: 6px;
    padding: 4px 10px;
    background-color: #c7f0ff;
    border: none;
    &:focus {
        outline: none;
    }
`
const Table = styled.table`
    border-collapse: collapse;  
    >thead {
        >tr {
            background-color: #f2f9ff;
            >th {
                font-size: 12px;
                font-weight: bold;
                line-height: 1.42;
                text-align: left;
                color: #000000;
                padding: 10px;
                text-align: center;
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
                color: #707070;
            }
        }
    }
`
export default function LayoutTable ({collaborator}) {
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
                    <th>Chọn người bảo trợ</th>
                </tr>
            </thead>
            <tbody>
                {
                    _.map(collaborator, user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>
                                    {user.name}
                                    <Span>{user.identity_card_number}</Span>
                                </td>
                                <td>
                                    {user.bank} - {user.bank_branch}
                                    <Span>{user.account_number}</Span>
                                </td>
                                <td>{user.email}</td>
                                <td>
                                    Hoàng Công Minh
                                    <Span>{user.code}</Span>
                                </td>
                                <td>{user.referral_code}</td>
                                <td>
                                    <Button>
                                        {user.status === 1 ? 'Hãy xác nhận' : 'Xác nhận rồi'}
                                    </Button>
                                </td>
                                <td>
                                    <Button>
                                        Bảo trợ
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}