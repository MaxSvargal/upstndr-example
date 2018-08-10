import React from 'upstndr/internals/react'
import { styled } from 'upstndr'
import { Repo } from './reducers'

interface Props { onChange: (text: string) => void }

const ListItem = ({ onChange }: Props) =>
  <Input type='text' onChange={e => onChange(e.target.value)} />

const Input = styled('input')({
  color: 'red'
})

export default ListItem
