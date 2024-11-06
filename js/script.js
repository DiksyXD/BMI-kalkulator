document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let resultText = `BMI Anda adalah: ${bmi.toFixed(2)}. `;
        let resultColor = '';

        if (bmi < 18.5) {
            resultText += "Anda termasuk kategori: Kurang berat badan.";
            resultColor = '#FFA500'; // Orange
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += "Anda termasuk kategori: Normal.";
            resultColor = '#4CAF50'; // Green
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += "Anda termasuk kategori: Kelebihan berat badan.";
            resultColor = '#FFC107'; // Amber
        } else {
            resultText += "Anda termasuk kategori: Obesitas.";
            resultColor = '#F44336'; // Red
        }

        const resultElement = document.getElementById('result');
        resultElement.innerText = resultText;
        resultElement.style.backgroundColor = resultColor;
        resultElement.style.color = 'white';
        resultElement.style.padding = '10px';
        resultElement.style.borderRadius = '5px';
    } else {
        const resultElement = document.getElementById('result');
        resultElement.innerText = "Silakan masukkan nilai yang valid.";
        resultElement.style.backgroundColor = '#607D8B'; // Blue Grey
        resultElement.style.color = 'white';
        resultElement.style.padding = '10px';
        resultElement.style.borderRadius = '5px';
    }
});

// Event listener untuk tombol reset
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('bmiForm').reset(); // Mengosongkan input
    const resultElement = document.getElementById('result');
    resultElement.innerText = ""; // Menghapus hasil
    resultElement.style.backgroundColor = ''; // Menghapus warna latar belakang
    resultElement.style.color = ''; // Mengembalikan warna teks default
    resultElement.style.padding = ''; // Menghapus padding
    resultElement.style.borderRadius = ''; // Menghapus border radius
});


//untuk navbar//

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

////