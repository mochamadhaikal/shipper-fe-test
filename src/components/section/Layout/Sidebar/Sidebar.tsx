import Image from 'next/image'
import { Calendar, Home, Users } from 'react-feather'

import { Text } from '@components/ui'
import LogoShipper from '@assets/logo.png'

import { Container, ContainerLogo, ContainerMenu, ContainerMenuItem, Overlay } from './style'
import type { ISidebarItem, ISidebar } from './types'

function SidebarItem({ icon, label, isActive = false }: ISidebarItem) {
  return (
    <ContainerMenuItem isActive={isActive}>
      {icon}
      <Text>
        {label}
      </Text>
    </ContainerMenuItem>
  )
}

function Sidebar({ isShowSidebar, setIsShowSidebar }: ISidebar) {
  return (
    <>
      <Overlay onClick={() => setIsShowSidebar(!isShowSidebar)} isShowSidebar={isShowSidebar} />
      <Container isShowSidebar={isShowSidebar}>
        <ContainerLogo>
          <Image src={LogoShipper} alt="logo" height={28} width={150} />
        </ContainerLogo>
        <ContainerMenu>
          <SidebarItem icon={<Home size={16} />} label="Beranda" />
          <SidebarItem isActive icon={<Users size={16} />} label="Driver Management" />
          <SidebarItem icon={<Calendar size={16} />} label="Pickup" />
        </ContainerMenu>
      </Container>
    </>
  )
}

export default Sidebar
