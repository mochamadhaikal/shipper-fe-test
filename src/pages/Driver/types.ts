export interface IDrivers {
  cell: string
  email: string
  dob: { date: string }
  login: { username: string }
  picture: { large: string }
  name: {
    first: string
    last: string
  }
}

export interface IDriverItem {
  username: string
  firstName: string
  lastName: string
  phone: string
  email: string
  dob: string
  image: string
}

export interface IDriverItemDesc {
  label: string
  desc: string
}
