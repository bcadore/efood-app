import { useFormik } from 'formik'
import * as Yup from 'yup'
import * as S from './styles'
import type { DeliveryValues } from './types'

type Props = {
  onNext: (values: DeliveryValues) => void
  onBack: () => void
}

const DeliveryForm = ({ onNext, onBack }: Props) => {
  const formik = useFormik<DeliveryValues>({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().min(5, 'Mínimo de 5 caracteres').required('Obrigatório'),
      address: Yup.string().required('Obrigatório'),
      city: Yup.string().required('Obrigatório'),
      zipCode: Yup.string().min(8, 'Mínimo 8 caracteres').required('Obrigatório'),
      number: Yup.number().required('Obrigatório')
    }),
    onSubmit: (values) => onNext(values)
  })

  const getError = (field: keyof DeliveryValues) => {
    const isTouched = formik.touched[field]
    const error = formik.errors[field]
    return isTouched && error ? error : ''
  }

  return (
    <>
      <h2>Entrega</h2>
      <form onSubmit={formik.handleSubmit}>
        <S.InputGroup>
          <label htmlFor="receiver">Quem irá receber</label>
          <input id="receiver" type="text" name="receiver" value={formik.values.receiver} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('receiver') ? 'error' : ''} />
          {getError('receiver') && <small>{getError('receiver')}</small>}
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" name="address" value={formik.values.address} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('address') ? 'error' : ''} />
          {getError('address') && <small>{getError('address')}</small>}
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" name="city" value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('city') ? 'error' : ''} />
          {getError('city') && <small>{getError('city')}</small>}
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="zipCode">CEP</label>
            <input id="zipCode" type="text" name="zipCode" value={formik.values.zipCode} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('zipCode') ? 'error' : ''} />
            {getError('zipCode') && <small>{getError('zipCode')}</small>}
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input id="number" type="number" name="number" value={formik.values.number} onChange={formik.handleChange} onBlur={formik.handleBlur} className={getError('number') ? 'error' : ''} />
            {getError('number') && <small>{getError('number')}</small>}
          </S.InputGroup>
        </S.Row>

        <S.InputGroup>
          <label htmlFor="complement">Complemento (opcional)</label>
          <input id="complement" type="text" name="complement" value={formik.values.complement} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        </S.InputGroup>

        <div style={{ marginTop: '16px' }}>
          <S.Button type="submit">Continuar com o pagamento</S.Button>
          <S.Button type="button" onClick={onBack}>Voltar para o carrinho</S.Button>
        </div>
      </form>
    </>
  )
}

export default DeliveryForm
