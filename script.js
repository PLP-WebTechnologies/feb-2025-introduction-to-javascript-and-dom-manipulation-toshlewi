document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    const toggleCarBtn = document.getElementById('toggle-car-btn');
    const styleContactBtn = document.getElementById('style-contact-btn');
    const carsContainer = document.querySelector('.cars-container');
    
    // Text content to cycle through
    const slogans = [
        "Quality pre-owned vehicles at competitive prices",
        "Trusted car dealership since 2010",
        "Your satisfaction is our priority",
        "Financing options available"
    ];
    let currentSlogan = 0;
    
    // Third car element
    const thirdCar = document.createElement('div');
    thirdCar.className = 'car-card hidden';
    thirdCar.innerHTML = `
        <img src="https://images.pexels.com/photos/29098224/pexels-photo-29098224/free-photo-of-bmw-3-series-car-at-sunset-in-erbil.jpeg?auto=compress&cs=tinysrgb&w=600" alt="BMW 3 Series">
        <h3>BMW 320i 2019</h3>
        <p>28,000 km | Automatic | Petrol</p>
        <p class="price">Ksh 2.6M</p>
    `;
    carsContainer.appendChild(thirdCar);
    
    // 1. Change text content dynamically
    changeTextBtn.addEventListener('click', function() {
        currentSlogan = (currentSlogan + 1) % slogans.length;
        dynamicText.textContent = slogans[currentSlogan];
    });
    
    // 2. Add/remove element when button is clicked
    toggleCarBtn.addEventListener('click', function() {
        thirdCar.classList.toggle('hidden');
        this.textContent = thirdCar.classList.contains('hidden') 
            ? 'Show Third Vehicle' 
            : 'Hide Third Vehicle';
    });
    
    // 3. Modify CSS styles via JavaScript
    styleContactBtn.addEventListener('click', function() {
        const phone = document.getElementById('phone');
        const email = document.getElementById('email');
        
        phone.classList.toggle('highlight');
        email.classList.toggle('highlight');
        
        this.textContent = phone.classList.contains('highlight')
            ? 'Remove Highlight'
            : 'Highlight Contact Info';
    });
});
