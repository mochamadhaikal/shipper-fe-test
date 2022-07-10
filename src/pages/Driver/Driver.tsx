import { useMemo, useContext, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import { ChevronLeft, ChevronRight } from 'react-feather'

import { getDrivers } from '@api/driver.api'
import { Loading, Text } from '@components/ui'
import { DriverProvider, DriverStore } from '@context/driver'

import DriverHeader from "./DriverHeader"
import DriverItem from './DriverItem'
import { ContainerDriver, ContainerPagination, PaginationItem, NotFound } from './style'
import type { IDrivers } from './types'

const PER_PAGE = 5

function Driver() {
  const router = useRouter()
  const { data: drivers = [], isLoading } = useQuery<IDrivers[]>('drivers', getDrivers)

  const { driverState: { keyword } } = useContext(DriverStore)

  const processData = useMemo(() => {
    let dataUsers = []
    const convertData = drivers.map((el) => ({
      ...el,
      dob: {
        date: dayjs(new Date(el.dob.date)).format('DD-MM-YYYY')
      }
    }))

    if(!keyword) {
      dataUsers = convertData
    } else {
      dataUsers = convertData.filter((el) => {
        const dataItemSearch = [
          el.name.first || '',
          el.name.last || '',
          el.login.username || ''
        ].join(' ').toLowerCase()

        return dataItemSearch.indexOf(
          keyword.replaceAll(',', '').toLowerCase()
        ) >= 0
      })
    }
    return {
      total: dataUsers.length,
      dataUsers
    }
  }, [drivers, keyword])

  const maxPage = useMemo(() => {
    return Math.ceil(processData.total / PER_PAGE)
  }, [processData.total])

  const currentPage = useMemo(() => {
    return router.query.page && !isNaN(+router.query.page) ? +router.query.page : 1
  }, [router.query])

  const dataDrivers = useMemo(() => {
    const getIndexFrom = (currentPage - 1) * PER_PAGE
    const getIndexTo = getIndexFrom + PER_PAGE

    return processData.dataUsers.slice(getIndexFrom, getIndexTo)
  }, [currentPage, processData])

  const paginationDisabled = useMemo(() => {
    let previous = false
    let next = false

    if(currentPage >= maxPage) {
      next = true
    }
    if(currentPage <= 1) {
      previous = true
    }

    return {
      previous,
      next
    }
  }, [currentPage, maxPage])

  const handleNextPage = () => {
    if(!paginationDisabled.next) {
      const newPage = currentPage + 1
      router.push(`?page=${newPage}`)
    }
  }

  const handlePreviousPage = () => {
    if(!paginationDisabled.previous) {
      const newPage = currentPage - 1
      router.push(`?page=${newPage}`)
    }
  }

  useEffect(() => {
    if((currentPage > maxPage) && maxPage > 0) {
      router.replace('/')
    }
  }, [currentPage, maxPage, router])

  return (
    <>
      <DriverHeader />
      {isLoading && <Loading />}
      {!!dataDrivers.length && (
        <>
        <ContainerDriver>
          {dataDrivers.map((item: IDrivers, index: number) => (
            <DriverItem
              key={index}
              username={item.login.username}
              firstName={item.name.first}
              lastName={item.name.last}
              phone={item.cell}
              email={item.email}
              dob={item.dob.date}
              image={item.picture.large}
            />
          ))}
        </ContainerDriver>
        <ContainerPagination>
          <PaginationItem isDisabled={paginationDisabled.previous} onClick={handlePreviousPage}>
            <ChevronLeft size="16" /> Previous Page
          </PaginationItem>
          <PaginationItem isDisabled={paginationDisabled.next} onClick={handleNextPage}>
            Next Page <ChevronRight size="16" />
          </PaginationItem>
        </ContainerPagination>
        </>
      )}
      {!dataDrivers.length && !isLoading && (
         <NotFound>
          <Text color="main">Data tidak ditemukan</Text>
        </NotFound>
      )}
    </>
  )
}

function DriverWithProvider() {
  return (
    <DriverProvider>
      <Driver />
    </DriverProvider>
  )
}



export default DriverWithProvider
