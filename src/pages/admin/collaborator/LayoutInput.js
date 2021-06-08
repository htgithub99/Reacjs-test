import styled from 'styled-components'
import * as _ from 'lodash'
import Input from '../../../component/Input'
import Label from '../../../component/Label'

const InputFieldLeft = styled.div``
const InputFieldRight = styled.div``
const InputField = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const InputFieldBox = styled.div`
    margin-bottom: 20px;
`

export default function LayoutInput ({ InputFieldLeftMap, InputFieldRightMap }) {
    return (

        <InputField>
            <InputFieldLeft>

                {
                    _.map(InputFieldLeftMap, field => {
                        return (
                            <InputFieldBox key={field.id}>
                                <Label>{field.name}</Label>
                                <Input></Input>
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
                                <Input></Input>
                            </InputFieldBox>
                        )
                    })
                }
            </InputFieldRight>
        </InputField>
    )
}