import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/customer.css';
import { useParams } from 'react-router-dom';

export default function Payment() {
  const [rzp, setRzp] = useState(null);
  const { email } = useParams(); // Get the email from URL parameters

  useEffect(() => {
    const verifyPayment = async (orderId, paymentId, signature) => {
      try {
        const verifyResponse = await axios.post('http://localhost:8080/verify', { orderId, paymentId, signature });
        const isValid = verifyResponse.data;
    
        if (isValid) {
          alert('Payment successful');
          // Use the email obtained from URL parameters
          console.log(email);
          await axios.post('http://localhost:8080/payment-success', { email });
          window.location.href = '/map-login';
        } else {
          alert('Payment failed');
          window.location.href = '/customer';
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
      }
    };

    const loadRazorpayScript = async () => {
      try {
        const razorpayScript = document.createElement('script');
        razorpayScript.src = 'https://checkout.razorpay.com/v1/checkout.js';
        razorpayScript.async = true;
        razorpayScript.onload = initializeRazorpay;
        document.body.appendChild(razorpayScript);
      } catch (error) {
        console.error('Error loading Razorpay script:', error);
      }
    };

    const initializeRazorpay = async () => {
      try {
        const orderResponse = await axios.post('http://localhost:8080/createOrder');
        const order = orderResponse.data;

        const options = {
          key: 'rzp_test_3HOkvAEOeNz4YC',
          amount: order.amount_due.toString(),
          currency: 'INR',
          name: 'Tune Hub',
          description: 'Test Transaction',
          order_id: order.id,
          handler: function (response) {
            verifyPayment(response.razorpay_order_id, response.razorpay_payment_id, response.razorpay_signature);
          },
          prefill: {
            name: 'Your Name',
            email: 'test@example.com',
            contact: '9999999999',
          },
          notes: {
            address: 'Your Address',
          },
          theme: {
            color: '#F37254',
          },
        };

        const rzpInstance = new window.Razorpay(options);
        setRzp(rzpInstance);
      } catch (error) {
        console.error('Error initializing Razorpay:', error);
      }
    };

    loadRazorpayScript();
  }, [email]); // Include email in the dependency array

  const handleBuyClick = async (e) => {
    e.preventDefault();
    if (rzp) {
      rzp.open();
    }
  };

  return (
    <div>
      <form id="payment-form">
        <button type="submit" className="buy-button" onClick={handleBuyClick}>
          BUY
        </button>
      </form>
    </div>
  );
}
