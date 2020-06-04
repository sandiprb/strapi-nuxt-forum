import jwt_decode from 'jwt-decode'
import { format, parseISO } from 'date-fns'

export const isSmallerThanNow = (data) => {
  var toDate = new Date()
  if (new Date(data).getTime() <= toDate.getTime()) {
    return true
  }
  return false
}

export const isValidJwt = (token) => {
  const jwt_data = jwt_decode(token)
  return !isSmallerThanNow(new Date(jwt_data.exp * 1000))
}