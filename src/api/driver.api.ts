import keys from '@constants/keys'
import isJson from '@utils/isJson'

export const getDrivers = async () => {
  const driverStorage = localStorage.getItem(keys.DRIVER_STORAGE)

  if(driverStorage && isJson(driverStorage)) {
    return JSON.parse(driverStorage)
  }

  const response = await fetch('https://randomuser.me/api/?results=30')
  if (!response.ok) {
    throw new Error("Fetching Error");
  }

  const data = await response.json()
  const returnData = data.results || []

  localStorage.setItem(keys.DRIVER_STORAGE, JSON.stringify(returnData))

  return returnData
}
