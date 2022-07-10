import Image from 'next/image'
import { AlignJustify } from 'react-feather'

import { Text } from '@components/ui'
import User from '@assets/user.png'
import LogoShipper from '@assets/logo.png'

import { Container, ContainerRight, ContainerLeft, Profile } from './style'

interface IHeader {
  setIsShowSidebar: (value: boolean) => void
  isShowSidebar: boolean
}

function Header({ setIsShowSidebar, isShowSidebar }: IHeader) {
  return (
    <Container data-testid="header-component">
      <ContainerLeft>
        <AlignJustify data-testid="menu-expand" onClick={() => setIsShowSidebar(!isShowSidebar)} />
        <Image src={LogoShipper} alt="logo" height={28} width={150} />
      </ContainerLeft>
      <ContainerRight>
        <Profile>
          <Text isBlock={false}>
            Hello,
          </Text>
          <Text isBlock={false} color="main">
            Haikal
          </Text>
        </Profile>
        <Image src={User} alt="user" height={35} width={35} />
      </ContainerRight>
    </Container>
  )
}

export default Header
