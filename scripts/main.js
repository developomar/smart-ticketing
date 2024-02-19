// responsive menu scripts
function responsiveButtonOpen () {
    const responsiveMenu = document.getElementById('responsive-menu')
    responsiveMenu.classList.remove('hidden')
}

function responsiveButtonClose (){
    const responsiveMenu = document.getElementById('responsive-menu')
    responsiveMenu.classList.add('hidden')
}






// Get all buttons
const allButtons = document.querySelectorAll('.seats-list > button');
let clickedCount = 0;

function handleButtonClick(index) {
    // available seats scripts
  const availableSeatsElement = getElementTextByID('available-seats');
  const availableSeats = availableSeatsElement - 1;
  setElementTextByID('available-seats', availableSeats);

    //   total seat scripts
    const totalSeatElement = getElementTextByID('total-seat');
    const totalSeat = totalSeatElement + 1;
    setElementTextByID('total-seat', totalSeat)



  clickedCount++;

  if (clickedCount === 1) {
    
    const totalPaymentElement = 550;
    setElementTextByID ('total-price', totalPaymentElement);
    setElementTextByID ('grand-total-price', totalPaymentElement);
  }

  else if (clickedCount === 2) {
    const totalPaymentElement = 550 + 550;
    setElementTextByID ('total-price', totalPaymentElement);
    setElementTextByID ('grand-total-price', totalPaymentElement);
  }

  else if (clickedCount === 3) {
    const totalPaymentElement = 550 + 550 + 550;
    setElementTextByID ('total-price', totalPaymentElement);
    setElementTextByID ('grand-total-price', totalPaymentElement);
  }

  else if (clickedCount === 4) {

   const totalPaymentElement = 550 + 550 + 550 + 550;
    setElementTextByID ('total-price', totalPaymentElement);
    setElementTextByID ('grand-total-price', totalPaymentElement);
    document.getElementById('coupon-button').removeAttribute('disabled');  
    allButtons.forEach(button => button.disabled = true);
  }

}

allButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    handleButtonClick(index);
  }, { once: true });
});



    document.getElementById('coupon-button').addEventListener('click', function(){
        const couponTextElement = getElementInputValueByID ('coupon-text');
        if (couponTextElement === 'NEW15') {
            const totalPaymentElement = 550 + 550 + 550 + 550;
            const totalDiscountPayment = totalPaymentElement * 0.15;
            const discountPayment = totalPaymentElement - totalDiscountPayment
            setElementTextByID ('grand-total-price', discountPayment);

            const discountPriceElement = document.getElementById('discount-price-div');
            const p1 =document.createElement('p');
            p1.innerText= 'Discount Price';
            discountPriceElement.appendChild(p1);

            const p2 = document.createElement('p');
            const span1 = document.createElement('span');
            span1.innerText = 'BDT' + ' '
            p2.appendChild(span1);
            const span2 = document.createElement('span')
            span2.id = ('discount-price');
            p2.appendChild(span2);
            discountPriceElement.appendChild(p2)
            setElementTextByID ('discount-price', totalDiscountPayment);

            const hiddenInput = document.getElementById('coupon-text');
            hiddenInput.classList.add('hidden')

            const couponButton = document.getElementById('coupon-button');
            couponButton.classList.add('w-full');
            couponButton.innerText = 'Coupon code applied succesfully';
        }

        else if (couponTextElement === 'Couple 20') {
            const totalPaymentElement = 550 + 550 + 550 + 550;
            const totalDiscountPayment = totalPaymentElement * 0.2;
            const discountPayment = totalPaymentElement - totalDiscountPayment
            setElementTextByID ('grand-total-price', discountPayment);

            const discountPriceElement = document.getElementById('discount-price-div');
            const p1 =document.createElement('p');
            p1.innerText= 'Discount Price';
            discountPriceElement.appendChild(p1);

            const p2 = document.createElement('p');
            const span1 = document.createElement('span');
            span1.innerText = 'BDT' + ' '
            p2.appendChild(span1);
            const span2 = document.createElement('span')
            span2.id = ('discount-price');
            p2.appendChild(span2);
            discountPriceElement.appendChild(p2)
            setElementTextByID ('discount-price', totalDiscountPayment);

            const hiddenInput = document.getElementById('coupon-text');
            hiddenInput.classList.add('hidden')

            const couponButton = document.getElementById('coupon-button');
            couponButton.classList.add('w-full');
            couponButton.innerText = 'Coupon code applied succesfully';
        }
    }, { once: true })
