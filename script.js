// 1. Image Slider Logic
const projectImages = [
    "images/image1.png", 
    "images/image2.png", 
    "images/image3.png"
];
let currentPos = 0;

const mainImg = document.getElementById('main-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', () => {
    currentPos++;
    if (currentPos >= projectImages.length) currentPos = 0;
    mainImg.src = projectImages[currentPos];
});

prevBtn.addEventListener('click', () => {
    currentPos--;
    if (currentPos < 0) currentPos = projectImages.length - 1;
    mainImg.src = projectImages[currentPos];
});

// 2. Dark Mode Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save preference to Local Storage
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Load saved theme on refresh
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

// 3. Form Validation
const contactForm = document.getElementById('portfolio-form');
const errorDiv = document.getElementById('error-message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('user-message').value;
    
    errorDiv.style.color = "red";

    if (!email.includes('@')) {
        errorDiv.innerText = "Please enter a valid email address";
    } else if (message.length < 10) {
        errorDiv.innerText = "Message must be at least 10 characters";
    } else {
        errorDiv.style.color = "green";
        errorDiv.innerText = "Form submitted successfully!";
        contactForm.reset();
    }
});