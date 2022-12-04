export interface TokenPayloadInterface {
  id: number,
  name: string,
  role: 'admin' | 'client' | 'worker',
}
