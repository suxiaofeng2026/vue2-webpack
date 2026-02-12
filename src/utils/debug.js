const say = (msg) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(msg)
  }
}
export const debug = {
  log: say
}
