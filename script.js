function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset(); // Resets the form after submission
}
);