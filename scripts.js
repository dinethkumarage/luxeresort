document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for the floating message button
    const messageBtn = document.getElementById('messageBtn');
    messageBtn.addEventListener('click', function() {
        alert('Thank you for your interest! Our team will contact you shortly.');
    });

    // Fade-in effect for the hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        hero.style.opacity = opacity;
        opacity += 0.1;
    }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation for the floating message button
    const messageBtn = document.getElementById('messageBtn');
    messageBtn.addEventListener('click', function() {
        alert('Thank you for your interest! Our team will contact you shortly.');
    });

    // Fade-in effect for the hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        hero.style.opacity = opacity;
        opacity += 0.1;
    }, 100);

    // Booking system
    const bookingForm = document.getElementById('bookingForm');
    const bookingTable = document.getElementById('bookingTable').getElementsByTagName('tbody')[0];

    // Function to load bookings from local storage
    function loadBookings() {
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookingTable.innerHTML = ''; // Clear existing table rows
        bookings.forEach(booking => {
            const newRow = bookingTable.insertRow();
            newRow.innerHTML = `
                <td>${booking.name}</td>
                <td>${booking.email}</td>
                <td>${booking.checkIn}</td>
                <td>${booking.checkOut}</td>
            `;
        });
    }

    // Function to save booking to local storage
    function saveBooking(booking) {
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const checkIn = document.getElementById('checkIn').value;
        const checkOut = document.getElementById('checkOut').value;

        // Create booking object
        const booking = { name, email, checkIn, checkOut };

        // Save booking to local storage
        saveBooking(booking);

        // Reload bookings in the table
        loadBookings();

        // Clear form fields
        bookingForm.reset();

        // Show confirmation message
        alert('Booking confirmed! Thank you for choosing our resort.');
    });

    // Load existing bookings when the page loads
    loadBookings();
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.payment-container');
    const slider = document.querySelector('.payment-slider');

    // Clone the payment methods to create a seamless loop
    const clone = container.cloneNode(true);
    slider.appendChild(clone);

    // Pause animation on hover
    slider.addEventListener('mouseenter', () => {
        container.style.animationPlayState = 'paused';
        clone.style.animationPlayState = 'paused';
    });

    slider.addEventListener('mouseleave', () => {
        container.style.animationPlayState = 'running';
        clone.style.animationPlayState = 'running';
    });
});