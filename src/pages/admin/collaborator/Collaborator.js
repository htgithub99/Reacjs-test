import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import callApi from '../../../api/admin/User'
import LayoutInput from './LayoutInput'
import LayoutTable from './LayoutTable'
import Box from '../../../component/Box'

const BoxContent = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const BoxContentLeft = styled.div `
`
const BoxContentRight = styled.div`
`

export default function Collaborator ({ match }) {

    const [collaborator, setCollaborator] = useState()
    const InputFieldLeftMap = [
        {
            id: 1,
            name: 'Họ tên:',
            field: 'name'
        },
        {
            id: 2,
            name: 'Số CMND:',
            field: 'identity_card_number'
        },
        {
            id: 3,
            name: 'Số tài khoản:',
            field: 'account_number'
        },
        {
            id: 4,
            name: 'Địa chỉ:',
            field: 'address'
        }
    ]

    const InputFieldRightMap = [
        {
            id: 5,
            name: 'Email:',
            field: 'email'
        },
        {
            id: 6,
            name: 'Tên ngân hàng:',
            field: 'bank'
        },
        {
            id: 7,
            name: 'Chi nhánh:',
            field: 'bank_branch'
        },
        {
            id: 8,
            name: 'Người bảo trợ:',
            field: 'role_id'
        }
    ]

    useEffect(() => {
        async function getCollaborator() {
            try {
                const datas = await callApi.get()
                setCollaborator(datas.data.data)
            }
            catch (err) {
                console.log(`Get fail! ${err}`);
            }
        }

        getCollaborator ()
    }, [])

    const create = (value) => {
        console.log(`value`, value);
    }
    return (
        <>
        <Box>
            <BoxContent>
                <BoxContentLeft>
                    <LayoutInput InputFieldLeftMap={ InputFieldLeftMap } InputFieldRightMap={ InputFieldRightMap } create={ create } />
                </BoxContentLeft>
                <BoxContentRight>
                    <LayoutTable collaborator={ collaborator } />
                </BoxContentRight>
            </BoxContent>
        </Box>
        </>
    )
}