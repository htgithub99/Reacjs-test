import styled from 'styled-components'
import * as _ from 'lodash'
import { useForm } from 'react-hook-form';
import React from 'react'
import Input from '../../../component/Input'
import LayoutButton from './LayoutButton'
import Label from '../../../component/Label'

const InputFieldLeft = styled.div`
    margin-right: 20px;
`
const InputFieldRight = styled.div``
const InputField = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`
const InputFieldBox = styled.div`
    margin-bottom: 20px;
`
export default function LayoutInput ({ InputFieldLeftMap, InputFieldRightMap, create }) {
    const { handleSubmit, register } = useForm();
    
    return (
        <>
            <form onSubmit={ handleSubmit( data => create(data)) }>
                <InputField>
                    <InputFieldLeft>

                        {
                            _.map(InputFieldLeftMap, field => {
                                return (
                                    <InputFieldBox key={field.id}>
                                        <Label>{field.name}</Label>
                                        <Input {...register(field.field)}></Input>
                                    </InputFieldBox>
                                )
                            })
                        }
                        
                    </InputFieldLeft>
                    <InputFieldRight>
                        {
                            _.map(InputFieldRightMap, field => {
                                return (
                                    <InputFieldBox key={field.id}>
                                        <Label>{field.name}</Label>
                                        <Input {...register(field.field)}></Input>
                                    </InputFieldBox>
                                )
                            })
                        }
                    </InputFieldRight>
                </InputField>
                <LayoutButton />
            </form>
        </>

    )
}