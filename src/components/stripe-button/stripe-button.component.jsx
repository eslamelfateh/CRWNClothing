import React from 'react' ;
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price })=> {
  const PriceForStripe = price * 100 ;
  const publishableKey = 'pk_test_51JXXeVElYwq68JNmukaiOdfoaHWB28w9YNlkBAITxMVNbP5AA9A7oMPLpx3UpFgv2xeTUjlOAxYyTgI25teSsTR100UEGdKgU6';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name= 'CRWN Clothing LTD.'
      billingAddress
      shippingAddress
      image= 'https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={PriceForStripe}
      panelLabel='Pay Now'
      token= {onToken}
      stripeKey={publishableKey}
    />
  )
} 

export default StripeCheckoutButton;