import { useFormik } from 'formik'
import * as Yup from 'yup'
import * as S from './styles'
import type { PaymentValues } from './types'

type Props = {
  onFinish: (values: PaymentValues) => void
  onBack: () => void
  priceLabel: string
  isLoading: boolean
}

const PaymentForm = ({ onFinish, onBack, priceLabel, isLoading }: Props) => {
  const formik = useFormik<PaymentValues>({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Obrigatório'),
      cardNumber: Yup.string().required('Obrigatório'),
      cardCode: Yup.string().required('Obrigatório'),
      expiresMonth: Yup.string().required('Obrigatório'),
      expiresYear: Yup.string().required('Obrigatório')
    }),
    onSubmit: (values) => onFinish(values)
  })

  const getError = (field: keyof PaymentValues) => {
    const isTouched = formik.touched[field]
    const error = formik.errors[field]
    return isTouched && error ? error : ''
  }

  return (
    <>
      <h2>Pagamento - Valor a pagar {priceLabel}</h2>
      <form onSubmit={formik.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="cardName">Nome no cartão</label>
          <input id="cardName" type="text" name="cardName" value={formik.values.cardName} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('cardName') ? 'error' : ''} disabled={isLoading} />
          {getError('cardName') && <small>{getError('cardName')}</small>}
        </S.InputGroup>

        <S.Row>
          <S.InputGroup style={{ flex: 2 }}>
            <label htmlFor="cardNumber">Número do cartão</label>
            <input id="cardNumber" type="text" name="cardNumber" value={formik.values.cardNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('cardNumber') ? 'error' : ''} disabled={isLoading} />
            {getError('cardNumber') && <small>{getError('cardNumber')}</small>}
          </S.InputGroup>
          <S.InputGroup style={{ flex: 1 }}>
            <label htmlFor="cardCode">CVV</label>
            <input id="cardCode" type="text" name="cardCode" value={formik.values.cardCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('cardCode') ? 'error' : ''} disabled={isLoading} />
            {getError('cardCode') && <small>{getError('cardCode')}</small>}
          </S.InputGroup>
        </S.Row>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input id="expiresMonth" type="text" name="expiresMonth" value={formik.values.expiresMonth} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('expiresMonth') ? 'error' : ''} disabled={isLoading} />
            {getError('expiresMonth') && <small>{getError('expiresMonth')}</small>}
          </S.InputGroup>
          <S.InputGroup>
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input id="expiresYear" type="text" name="expiresYear" value={formik.values.expiresYear} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('expiresYear') ? 'error' : ''} disabled={isLoading} />
            {getError('expiresYear') && <small>{getError('expiresYear')}</small>}
          </S.InputGroup>
        </S.Row>

        <div style={{ marginTop: '16px' }}>
          <S.Button type="submit" disabled={isLoading}>{isLoading ? 'Finalizando...' : 'Finalizar pagamento'}</S.Button>
          <S.Button type="button" onClick={onBack} disabled={isLoading}>Voltar para a edição de endereço</S.Button>
        </div>
      </form>
    </>
  )
}

export default PaymentForm
