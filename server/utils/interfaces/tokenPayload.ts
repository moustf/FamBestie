export interface TokenPayload {
  id: number,
  name: string,
  role: 'admin' | 'client' | 'worker',
}
