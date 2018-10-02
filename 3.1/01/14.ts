export interface User {
  id: string
}
export interface AppUser {
  appName: 'appName'
  appID: string
}
export interface ServiceUser {
  serviceName: 'serviceName'
  serviceID: string  
}

export function getUserID(user: AppUser | ServiceUser | User) {
  // user は AppUser型に絞りこまれる
  if ('appName' in user) return user.appID
  // user は ServiceUser型に絞りこまれる
  if ('serviceName' in user) return user.serviceID
  // user は User型に絞りこまれる
  return user.id
}
