import React, { useEffect, useState } from 'react'
import * as _ from 'lodash'
import callApi from '../../../api/admin/Dashboard'
import styled from './styled-components-dashboard'

export default function Dashboard ({match}) {
    const [datas, setDatas] = useState()

    useEffect(() => {
        async function getApi() {
            try {
                const list_data = await callApi.get()
                setDatas(list_data.data.data)
            }
            catch (err) {
                console.log('Get fail!')
            }
            
        }
        getApi()

    }, [])

    return (
        <>
            <div match={match}>
                <styled.ContainerElement>
                    <styled.Box>
                    {
                        _.map(datas, (i) => {
                            return (
                                <styled.BoxChild color={i.id} key={i.id}>
                                    <img src={i.thumbail} alt='icon' />
                                    <h4>{i.name}</h4>
                                </styled.BoxChild>
                            )
                        })
                    }
                    </styled.Box>
                </styled.ContainerElement>
         
            </div>
        </>
    )
}