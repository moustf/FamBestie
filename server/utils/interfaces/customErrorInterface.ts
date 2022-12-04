export interface CustomErrorInterface extends Error {
  status: number,
  msg: string,
}
