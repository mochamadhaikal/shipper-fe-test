import { ChangeEvent, useContext } from 'react'
import { Plus, Search } from 'react-feather'

import { Text, Button, TextField } from '@components/ui'
import { DriverStore } from '@context/driver'

import { Container, ContainerRight, ButtonSpan } from './style'

function DriverHeader() {
  const { driverDispatch } = useContext(DriverStore)

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    driverDispatch({
      type: 'SET_KEYWORD',
      payload: e.target.value
    })
  }

  return (
    <Container>
      <div>
        <Text as='h1'>Driver Management</Text>
        <Text>Data Driver yang bekerja dengan Anda</Text>
      </div>
      <ContainerRight>
        <TextField onChange={onChangeKeyword} placeholder="Cari Driver" icon={<Search size={22} />} />
        <Button icon={<Plus size={14} />}>
          <ButtonSpan>Tambah Driver</ButtonSpan>
        </Button>
      </ContainerRight>
    </Container>
  )
}

export default DriverHeader
