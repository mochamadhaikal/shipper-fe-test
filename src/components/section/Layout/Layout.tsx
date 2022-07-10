import { ReactNode, useState } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import { Container, ContainerRight, ContainerContent } from './style'

interface ILayout {
  children: ReactNode
}

export default function Layout({ children }: ILayout) {
  const [isShowSidebar, setIsShowSidebar] = useState<boolean>(false)

  return (
    <Container>
      <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} />
      <ContainerRight>
        <Header setIsShowSidebar={setIsShowSidebar} isShowSidebar={isShowSidebar} />
        <ContainerContent>
          {children}
        </ContainerContent>
      </ContainerRight>
    </Container>
  )
}
