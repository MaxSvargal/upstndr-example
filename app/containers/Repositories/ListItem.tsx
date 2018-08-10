import React from 'upstndr/internals/react'
import { styled } from 'upstndr'
import { Repo } from './reducers'

interface Props { value: Repo }

const ListItem = ({ value }: Props) => <Item>{value.name}</Item>

const Item = styled('div')({
  color: 'blue'
})

export default ListItem
