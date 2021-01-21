import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51IC3j0Eq75SPElICqWkePnqds0nq0P1RPKOefKYZZsJNIY6YTdEVLHYqH4I0le4MCUVXBaLzs58YEJr2nBzQhnoK001eH9wmZb';
	

	const onToken = token => {
		console.log(token) ;
		alert('Payment successful') ;
	}


	return (
		<StripeCheckout 
			name="Crown Clothing" 
			label="Pay Now"
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
			/>
	)
}

export default StripeCheckoutButton;