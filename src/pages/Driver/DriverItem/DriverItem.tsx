import { MoreHorizontal } from 'react-feather'
import Image from 'next/image'

import { Text } from '@components/ui'

import { Container, Head, DriverIDContainer, Content, ContainerDesc } from './style'
import type { IDriverItem, IDriverItemDesc } from '../types'

function DriverItemDesc({ label, desc }: IDriverItemDesc) {
  return (
    <div>
      <Text color="grey">{label}</Text>
      <Text>{desc}</Text>
    </div>
  )
}

function DriverItem({
  username,
  firstName,
  lastName,
  phone,
  email,
  dob,
  image
}: IDriverItem) {
  return (
    <Container>
      <Head>
        <DriverIDContainer>
          <Text color="grey">Driver ID</Text>
          <Text color="main" isBold>{username}</Text>
        </DriverIDContainer>
        <MoreHorizontal size="20" />
      </Head>
      <Content>
        <Image src={image} alt={username} width={80} height={80} />
        <ContainerDesc>
          <DriverItemDesc label="Nama Driver" desc={`${firstName}, ${lastName}`} />
          <DriverItemDesc label="Telepon" desc={phone} />
          <DriverItemDesc label="Email" desc={email} />
          <DriverItemDesc label="Tanggal Lahir" desc={dob} />
        </ContainerDesc>
      </Content>
    </Container>
  )
}

export default DriverItem
