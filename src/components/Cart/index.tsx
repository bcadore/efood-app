import * as S from './styles'
import CartItems from './CartItems'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import useCart from './useCart'

// --- Componente Principal ---
const Cart = () => {
  const {
    isOpen,
    items,
    cartStage,
    setCartStage,
    closeCart,
    removeItem,
    getTotalPrice,
    formatPrice,
    handleDeliverySubmit,
    handlePaymentSubmit,
    isLoading,
    data
  } = useCart()

  if (!isOpen) return null

  return (
    <>
      <S.Overlay onClick={closeCart} />
      <S.CartContainer>
        {/* TELA 1: LISTA DE PRODUTOS */}
        {cartStage === 'cart' && (
          <>
            {items && items.length > 0 ? (
              <>
                <CartItems items={items} removeItem={removeItem} formatPrice={formatPrice} />

                <div>
                  <S.Prices>
                    <span>Valor total</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </S.Prices>
                  <S.Button onClick={() => setCartStage('delivery')} type="button">Continuar com a entrega</S.Button>
                </div>
              </>
            ) : (
              <p className="empty-text">O carrinho está vazio.</p>
            )}
          </>
        )}

        {/* TELA 2: FORMULÁRIO DE ENTREGA */}
        {cartStage === 'delivery' && (
          <DeliveryForm onNext={handleDeliverySubmit} onBack={() => setCartStage('cart')} />
        )}

        {/* TELA 3: FORMULÁRIO DE PAGAMENTO */}
        {cartStage === 'payment' && (
          <PaymentForm 
            onFinish={handlePaymentSubmit} 
            onBack={() => setCartStage('delivery')} 
            priceLabel={formatPrice(getTotalPrice())} 
            isLoading={isLoading} 
          />
        )}

        {/* TELA 4: CONFIRMAÇÃO */}
        {cartStage === 'confirmation' && (
          <>
            <h2>Pedido realizado - {data?.orderId}</h2>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
            <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
            <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
            <S.Button type="button" onClick={closeCart}>Concluir</S.Button>
          </>
        )}
      </S.CartContainer>
    </>
  )
}

export default Cart