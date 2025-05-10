
    // Service Data
    const serviceData = {
      'Dry Cleaning': {
        'Men\'s Wear': {
          'Suit': 12.99,
          'Shirt': 5.99,
          'Pants': 7.99,
          'Jacket': 9.99,
          'Tie': 3.99
        },
        'Women\'s Wear': {
          'Dress': 15.99,
          'Blouse': 8.99,
          'Skirt': 7.99,
          'Coat': 12.99,
          'Silk Top': 9.99
        },
        'Special Care': {
          'Wedding Dress': 49.99,
          'Leather Jacket': 24.99,
          'Curtains': 19.99,
          'Comforter': 29.99
        }
      },
      'Wash and Fold': {
        'Regular': {
          'T-Shirt': 2.99,
          'Jeans': 3.99,
          'Sweater': 4.99,
          'Underwear': 1.99,
          'Socks': 0.99
        },
        'Delicate': {
          'Silk Blouse': 6.99,
          'Wool Sweater': 7.99,
          'Lace Items': 5.99
        }
      },
      'Ironing': {
        'Clothing': {
          'Shirt': 3.99,
          'Pants': 3.99,
          'Dress': 5.99,
          'Blouse': 4.99
        },
        'Household': {
          'Tablecloth': 7.99,
          'Napkins': 2.99,
          'Pillowcases': 3.99
        }
      },
      'Shoe Cleaning': {
        'Footwear': {
          'Leather Shoes': 9.99,
          'Sneakers': 7.99,
          'Boots': 12.99,
          'Sandals': 5.99
        }
      },
      'Wash and Iron': {
        'Clothing': {
          'Shirt': 6.99,
          'Pants': 6.99,
          'Dress': 8.99,
          'Blouse': 7.99
        }
      }
    };

    // Booking Data
    let bookingData = {
      items: [],
      coupon: null,
      discount: 0,
      subtotal: 0,
      total: 0,
      address: null,
      phone: null,
      apartment: null,
      paymentMethod: null,
      cardDetails: null
    };

    // DOM Elements
    const serviceTypeSelect = document.getElementById('service-type');
    const categorySelect = document.getElementById('category');
    const itemSelect = document.getElementById('item');
    const quantityInput = document.getElementById('quantity');
    const addItemBtn = document.getElementById('add-item');
    const itemsList = document.getElementById('items-list');
    const couponCodeInput = document.getElementById('coupon-code');
    const applyCouponBtn = document.getElementById('apply-coupon');
    const couponMessage = document.getElementById('coupon-message');
    const subtotalEl = document.getElementById('subtotal');
    const discountEl = document.getElementById('discount');
    const totalEl = document.getElementById('total');
    const proceedToAddressBtn = document.getElementById('proceed-to-address');
    
    // Map Variables
    let map;
    let marker;
    let autocomplete;

    // Initialize the application
    document.addEventListener('DOMContentLoaded', function() {
      // Initialize service type dropdown
      serviceTypeSelect.addEventListener('change', function() {
        const selectedService = this.value;
        
        // Reset dependent fields
        categorySelect.innerHTML = '<option value="">Select category</option>';
        itemSelect.innerHTML = '<option value="">Select item</option>';
        itemSelect.disabled = true;
        quantityInput.disabled = true;
        addItemBtn.disabled = true;
        
        if (selectedService && serviceData[selectedService]) {
          categorySelect.disabled = false;
          
          // Populate categories
          for (const category in serviceData[selectedService]) {
            categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
          }
        } else {
          categorySelect.disabled = true;
        }
      });
      
      // Initialize category dropdown
      categorySelect.addEventListener('change', function() {
        const selectedService = serviceTypeSelect.value;
        const selectedCategory = this.value;
        
        // Reset dependent fields
        itemSelect.innerHTML = '<option value="">Select item</option>';
        quantityInput.disabled = true;
        addItemBtn.disabled = true;
        
        if (selectedService && selectedCategory && serviceData[selectedService][selectedCategory]) {
          itemSelect.disabled = false;
          
          // Populate items
          for (const item in serviceData[selectedService][selectedCategory]) {
            itemSelect.innerHTML += `<option value="${item}">${item}</option>`;
          }
        } else {
          itemSelect.disabled = true;
        }
      });
      
      // Initialize item dropdown
      itemSelect.addEventListener('change', function() {
        if (this.value) {
          quantityInput.disabled = false;
          addItemBtn.disabled = false;
        } else {
          quantityInput.disabled = true;
          addItemBtn.disabled = true;
        }
      });
      
      // Add item to cart
      addItemBtn.addEventListener('click', function() {
        const service = serviceTypeSelect.value;
        const category = categorySelect.value;
        const item = itemSelect.value;
        const quantity = parseInt(quantityInput.value);
        const price = serviceData[service][category][item];
        
        // Add to booking data
        bookingData.items.push({
          service,
          category,
          item,
          quantity,
          price,
          total: quantity * price
        });
        
        // Update cart display
        updateCart();
        
        // Reset form
        itemSelect.value = '';
        quantityInput.value = '1';
        quantityInput.disabled = true;
        addItemBtn.disabled = true;
      });
      
      // Apply coupon
      applyCouponBtn.addEventListener('click', function() {
        const code = couponCodeInput.value.trim();
        
        if (code === 'WOSH10') {
          bookingData.coupon = code;
          bookingData.discount = bookingData.subtotal * 0.1; // 10% discount
          updateTotals();
          
          couponMessage.textContent = 'Coupon applied successfully! 10% discount added.';
          couponMessage.className = 'coupon-message coupon-success';
        } else if (code === '') {
          couponMessage.textContent = 'Please enter a coupon code';
          couponMessage.className = 'coupon-message coupon-error';
        } else {
          couponMessage.textContent = 'Invalid coupon code';
          couponMessage.className = 'coupon-message coupon-error';
        }
      });
      
      // Proceed to address
      proceedToAddressBtn.addEventListener('click', function() {
        if (bookingData.items.length > 0) {
          showSection('address-section');
          updateStepIndicator(2);
        }
      });
    });
    
    // Update cart display
    function updateCart() {
      if (bookingData.items.length === 0) {
        itemsList.innerHTML = `
          <tr>
            <td colspan="6" class="empty-state">
              <i class="fas fa-box-open"></i>
              <p>No items selected yet</p>
            </td>
          </tr>
        `;
        proceedToAddressBtn.disabled = true;
      } else {
        itemsList.innerHTML = '';
        
        bookingData.items.forEach((item, index) => {
          itemsList.innerHTML += `
            <tr>
              <td>${item.item}</td>
              <td>${item.service}</td>
              <td>$${item.price.toFixed(2)}</td>
              <td>${item.quantity}</td>
              <td>$${(item.quantity * item.price).toFixed(2)}</td>
              <td><span class="remove-item" onclick="removeItem(${index})"><i class="fas fa-times"></i></span></td>
            </tr>
          `;
        });
        
        proceedToAddressBtn.disabled = false;
      }
      
      updateTotals();
    }
    
    // Remove item from cart
    function removeItem(index) {
      bookingData.items.splice(index, 1);
      updateCart();
    }
    
    // Update totals
    function updateTotals() {
      bookingData.subtotal = bookingData.items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
      bookingData.total = bookingData.subtotal - bookingData.discount;
      
      subtotalEl.textContent = bookingData.subtotal.toFixed(2);
      discountEl.textContent = bookingData.discount.toFixed(2);
      totalEl.textContent = bookingData.total.toFixed(2);
    }
    
    // Google Maps Initialization
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 }, // Default to New York
        zoom: 12,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      });
      
      // Initialize autocomplete
      autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        { types: ['geocode'] }
      );
      
      // When place is selected, center map and add marker
      autocomplete.addListener('place_changed', function() {
        const place = autocomplete.getPlace();
        
        if (!place.geometry) {
          return;
        }
        
        // Clear previous marker
        if (marker) {
          marker.setMap(null);
        }
        
        // Center map on selected location
        map.setCenter(place.geometry.location);
        map.setZoom(16);
        
        // Add marker
        marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
            scaledSize: new google.maps.Size(40, 40)
          }
        });
        
        // Save address
        bookingData.address = place.formatted_address;
      });
    }
    
    // Navigation Functions
    function showSection(sectionId) {
      document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
    }
    
    function updateStepIndicator(stepNumber) {
      document.querySelectorAll('.step').forEach((step, index) => {
        if (index + 1 < stepNumber) {
          step.classList.add('active');
          step.querySelector('.step-connector').classList.add('active');
        } else if (index + 1 === stepNumber) {
          step.classList.add('active');
          if (step.querySelector('.step-connector')) {
            step.querySelector('.step-connector').classList.remove('active');
          }
        } else {
          step.classList.remove('active');
          if (step.querySelector('.step-connector')) {
            step.querySelector('.step-connector').classList.remove('active');
          }
        }
      });
    }
    
    function backToService() {
      showSection('service-section');
      updateStepIndicator(1);
    }
  
 // Replace your existing proceedToPayment() function with this:
function proceedToPayment() {
  // Get form values
  const addressInput = document.getElementById('autocomplete');
  const phoneInput = document.getElementById('phone');
  const apartmentInput = document.getElementById('apartment');
  
  // 1. Validate address - accept any non-empty input
  // if (!addressInput.value || addressInput.value.trim() === '') {
  //   addressInput.focus();
  //   alert('Please enter a delivery address');
  //   return false;
  // }
  
  // 2. Save the raw address input regardless of Google Maps validation
  bookingData.address = addressInput.value;
  
  // 3. Validate phone number (simplified international format)
  if (!phoneInput.value || phoneInput.value.replace(/\D/g, '').length < 8) {
    phoneInput.focus();
    alert('Please enter a valid phone number with at least 8 digits');
    return false;
  }
  
  bookingData.phone = phoneInput.value;
  bookingData.apartment = apartmentInput.value;
  
  // Proceed to payment
  showSection('payment-section');
  updateStepIndicator(3);
  return true;
}

// Update your Google Maps autocomplete initialization:
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0}, // Default center
    zoom: 2,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  });
  
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    { 
      types: ['geocode'],
      componentRestrictions: {country: []} // Remove country restrictions
    }
  );
  
  // Make marker optional - don't fail if place has no geometry
  autocomplete.addListener('place_changed', function() {
    const place = autocomplete.getPlace();
    
    if (place.geometry) {
      map.setCenter(place.geometry.location);
      map.setZoom(16);
      
      if (marker) marker.setMap(null);
      marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        icon: {
          url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
          scaledSize: new google.maps.Size(40, 40)
        }
      });
    }
    
    // Always save the formatted address or raw input
    bookingData.address = place.formatted_address || document.getElementById('autocomplete').value;
  });
}
    
    function backToAddress() {
      showSection('address-section');
      updateStepIndicator(2);
    }
    
    function selectPayment(method) {
      bookingData.paymentMethod = method;
      
      // Update UI
      document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('selected');
      });
      event.currentTarget.classList.add('selected');
      
      // Show appropriate payment details
      document.querySelectorAll('.payment-details').forEach(el => {
        el.style.display = 'none';
      });
      document.getElementById(`${method}-details`).style.display = 'block';
    }
    
    function confirmBooking() {
      if (!bookingData.paymentMethod) {
        alert('Please select a payment method');
        return;
      }
      
      // For card payments, validate card details
      if (bookingData.paymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number').value;
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvv = document.getElementById('card-cvv').value;
        const cardName = document.getElementById('card-name').value;
        
        if (!cardNumber || !cardExpiry || !cardCvv || !cardName) {
          alert('Please enter all card details');
          return;
        }
        
        bookingData.cardDetails = {
          number: cardNumber,
          expiry: cardExpiry,
          cvv: cardCvv,
          name: cardName
        };
      }
      
      // Generate random booking code
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      document.getElementById('booking-code').textContent = code;
      
      // Update confirmation details
      document.getElementById('confirm-subtotal').textContent = bookingData.subtotal.toFixed(2);
      document.getElementById('confirm-discount').textContent = bookingData.discount.toFixed(2);
      document.getElementById('confirm-total').textContent = bookingData.total.toFixed(2);
      
      // Build items list
      let itemsHtml = '';
      bookingData.items.forEach(item => {
        itemsHtml += `
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <span>${item.quantity}x ${item.item} (${item.service})</span>
            <span>$${(item.quantity * item.price).toFixed(2)}</span>
          </div>
        `;
      });
      document.getElementById('confirmation-items').innerHTML = itemsHtml;
      
      // Add address and payment info
      document.getElementById('confirm-address').textContent = 
        `${bookingData.address}${bookingData.apartment ? ', ' + bookingData.apartment : ''}`;
      document.getElementById('confirm-phone').textContent = bookingData.phone;
      
      let paymentText = '';
      switch(bookingData.paymentMethod) {
        case 'card':
          paymentText = 'Credit/Debit Card (****' + bookingData.cardDetails.number.slice(-4) + ')';
          break;
        case 'paypal':
          paymentText = 'PayPal';
          break;
        case 'cod':
          paymentText = 'Cash on Delivery';
          break;
      }
      document.getElementById('confirm-payment').textContent = paymentText;
      
      // Show confirmation
      showSection('confirmation-section');
      updateStepIndicator(4);
      
      // In a real app, you would send the booking data to your server here
      console.log('Booking confirmed:', bookingData);
    }
    
