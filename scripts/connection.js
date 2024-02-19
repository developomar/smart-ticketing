// add bg-color or text-color and remove for the all seats button

// -------------------------A-----------------------------------
document.getElementById('A1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('A1')
    removeBackgroundColorByID ('A1')
    
    
    // seat name script
   const seatNameElement= getElementStringTextByID ('A1')
   const seatName = seatNameElement


    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)


    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.id = 'price'
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
   
}, { once: true })

//---------------------------------------------------------------------
document.getElementById('A2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('A2')
    removeBackgroundColorByID ('A2');

     // seat name script
   const seatNameElement= getElementStringTextByID ('A2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//---------------------------------------------------------------
document.getElementById('A3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('A3')
    removeBackgroundColorByID ('A3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('A3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//----------------------------------------------------------------
document.getElementById('A4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('A4')
    removeBackgroundColorByID ('A4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('A4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })


// -------------------------B-----------------------------------
document.getElementById('B1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('B1')
    removeBackgroundColorByID ('B1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('B1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-------------------------------------------------------------
document.getElementById('B2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('B2')
    removeBackgroundColorByID ('B2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('B2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//------------------------------------------------------------------
document.getElementById('B3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('B3')
    removeBackgroundColorByID ('B3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('B3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-----------------------------------------------------------------
document.getElementById('B4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('B4')
    removeBackgroundColorByID ('B4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('B4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------C-----------------------------------
document.getElementById('C1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('C1')
    removeBackgroundColorByID ('C1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('C1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-------------------------------------------------------------------
document.getElementById('C2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('C2')
    removeBackgroundColorByID ('C2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('C2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-------------------------------------------------------------------
document.getElementById('C3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('C3')
    removeBackgroundColorByID ('C3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('C3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//------------------------------------------------------------------
document.getElementById('C4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('C4')
    removeBackgroundColorByID ('C4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('C4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------D-----------------------------------
document.getElementById('D1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('D1')
    removeBackgroundColorByID ('D1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('D1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------------------------------------------------
document.getElementById('D2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('D2')
    removeBackgroundColorByID ('D2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('D2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-------------------------------------------------------------------
document.getElementById('D3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('D3')
    removeBackgroundColorByID ('D3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('D3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-----------------------------------------------------------------------
document.getElementById('D4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('D4')
    removeBackgroundColorByID ('D4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('D4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------E-----------------------------------
document.getElementById('E1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('E1')
    removeBackgroundColorByID ('E1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('E1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//------------------------------------------------------------------
document.getElementById('E2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('E2')
    removeBackgroundColorByID ('E2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('E2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-----------------------------------------------------------------
document.getElementById('E3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('E3')
    removeBackgroundColorByID ('E3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('E3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//---------------------------------------------------------------------
document.getElementById('E4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('E4')
    removeBackgroundColorByID ('E4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('E4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------F-----------------------------------
document.getElementById('F1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('F1')
    removeBackgroundColorByID ('F1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('F1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//------------------------------------------------------------------
document.getElementById('F2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('F2')
    removeBackgroundColorByID ('F2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('F2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//----------------------------------------------------------------
document.getElementById('F3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('F3')
    removeBackgroundColorByID ('F3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('F3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//----------------------------------------------------------------
document.getElementById('F4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('F4')
    removeBackgroundColorByID ('F4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('F4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------G-----------------------------------
document.getElementById('G1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('G1')
    removeBackgroundColorByID ('G1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('G1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//----------------------------------------------------------------
document.getElementById('G2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('G2')
    removeBackgroundColorByID ('G2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('G2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-----------------------------------------------------------------
document.getElementById('G3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('G3')
    removeBackgroundColorByID ('G3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('G3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })


//---------------------------------------------------------------
document.getElementById('G4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('G4')
    removeBackgroundColorByID ('G4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('G4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------H-----------------------------------
document.getElementById('H1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('H1')
    removeBackgroundColorByID ('H1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('H1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//---------------------------------------------------------------
document.getElementById('H2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('H2')
    removeBackgroundColorByID ('H2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('H2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-----------------------------------------------------------------
document.getElementById('H3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('H3')
    removeBackgroundColorByID ('H3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('H3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//----------------------------------------------------------------
document.getElementById('H4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('H4')
    removeBackgroundColorByID ('H4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('H4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------I-----------------------------------
document.getElementById('I1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('I1')
    removeBackgroundColorByID ('I1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('I1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//----------------------------------------------------------------
document.getElementById('I2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('I2')
    removeBackgroundColorByID ('I2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('I2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-----------------------------------------------------------------
document.getElementById('I3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('I3')
    removeBackgroundColorByID ('I3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('I3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//----------------------------------------------------------------
document.getElementById('I4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('I4')
    removeBackgroundColorByID ('I4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('I4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

// -------------------------J-----------------------------------
document.getElementById('J1').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('J1')
    removeBackgroundColorByID ('J1')
    // seat name script
   const seatNameElement= getElementStringTextByID ('J1')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//------------------------------------------------------------------
document.getElementById('J2').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('J2')
    removeBackgroundColorByID ('J2')
    // seat name script
   const seatNameElement= getElementStringTextByID ('J2')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//---------------------------------------------------------------------
document.getElementById('J3').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('J3')
    removeBackgroundColorByID ('J3')
    // seat name script
   const seatNameElement= getElementStringTextByID ('J3')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })

//-----------------------------------------------------------------
document.getElementById('J4').addEventListener('click', function(){
    addBackgroundAndTextColorByID ('J4')
    removeBackgroundColorByID ('J4')
    // seat name script
   const seatNameElement= getElementStringTextByID ('J4')
   const seatName = seatNameElement

    //class name script
   const classNameElement = getElementStringTextByID('class-name')
   const className = classNameElement.innerText = 'Economoy';
   const name = className

    //    ticket price script
    const ticketPriceElement = getElementTextByID('ticket-price');
    const ticketPrice = ticketPriceElement;
    // const price = setElementTextByID('price', ticketPrice)

    const seatPrice = document.getElementById('seats-price');
    seatPrice.classList.add('hidden')
    const seatPricingInfo = document.getElementById('seats-price-info');
    const div = document.createElement('div')
    div.classList.add('flex', 'justify-between')

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    div.appendChild(p1)

    const p2 = document.createElement('p');
    p2.innerText = name;
    div.appendChild(p2)

    const p3 = document.createElement('p');
    p3.innerText = ticketPrice;
    div.appendChild(p3);

    seatPricingInfo.appendChild(div);
}, { once: true })
