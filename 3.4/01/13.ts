export interface User {
  tag: 'other'
  id: string
}
export interface AppUser {
  tag: 'app'
  appID: string
}
export interface ServiceUser {
  tag: 'service'
  serviceID: string  
}

export function getUserIDBySwitch(user: AppUser | ServiceUser | User) {
  switch (user.tag) {
    case 'app':
      // user は AppUser型に絞りこまれる
      return user.appID
    case 'service':
      // user は ServiceUser型に絞りこまれる
      return user.serviceID
    default:
    // user は User型に絞りこまれる
      return user.id
  }
}
export function getUserIDByIf(user: AppUser | ServiceUser | User) {
  // user は AppUser型に絞りこまれる
  if (user.tag === 'app') return user.appID
  // user は ServiceUser型に絞りこまれる
  if (user.tag === 'service') return user.serviceID
  // user は User型に絞りこまれる
  return user.id
}
