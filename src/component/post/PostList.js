import React, { useEffect, useState } from 'react'
import * as _ from 'lodash'
import callApi from '../../api/admin/Post'
import styled from './styled-components-post'

export default function PostList ({match}) {
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
                                <styled.BoxChild greenColor key={i.id}>
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