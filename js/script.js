document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let resultText = `BMI Anda adalah: ${bmi.toFixed(2)}. `;

        if (bmi < 18.5) {
            resultText += "Anda termasuk kategori: Kurang berat badan.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultText += "Anda termasuk kategori: Normal.";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultText += "Anda termasuk kategori: Kelebihan berat badan.";
        } else {
            resultText += "Anda termasuk kategori: Obesitas.";
        }

        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Silakan masukkan nilai yang valid.";
    }
});

// Event listener untuk tombol reset
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('bmiForm').reset(); // Mengosongkan input
    document.getElementById('result').innerText = ""; // Menghapus hasil
});


//untuk navbar//

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

////