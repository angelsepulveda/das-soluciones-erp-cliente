import { TypeWithKey } from '@/core/infrastructure/models'

export const getVallidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: 'Se rompio la red papu',
  }

  return codeMatcher[errorCode]
}
