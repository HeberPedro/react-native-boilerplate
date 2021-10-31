import numeral from 'numeral'
import 'numeral/locales/pt-br'

numeral.locale('pt-br')

export const formatValue = (num: number) =>
  `R$ ${numeral(num).format('0,0.00')}`
