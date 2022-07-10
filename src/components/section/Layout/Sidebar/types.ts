import { ReactNode } from "react"

export interface ISidebarItem {
  icon: ReactNode
  label: string
  isActive?: boolean
}

export interface ISidebar {
  isShowSidebar: boolean
  setIsShowSidebar: (value: boolean) => void
}
