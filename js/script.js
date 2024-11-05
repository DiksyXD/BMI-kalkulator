//INI JAVA SCRIPT//
document.getElementById('hitungBmiBtn').addEventListener('click', function() {
    // Ambil nilai dari input berat badan dan tinggi badan
    var beratBadan = parseFloat(document.getElementById('berat-badan').value);
    var tinggiBadan = parseFloat(document.getElementById('tinggi-badan').value);
    
    // Pastikan kedua input tidak kosong
    if (!isNaN(beratBadan) && !isNaN(tinggiBadan) && tinggiBadan > 0) {
        // Hitung BMI
        var bmi = beratBadan / (tinggiBadan * tinggiBadan);
        
        // Tampilkan hasil BMI
        document.getElementById('hasilBmi').innerText = 'BMI Anda adalah: ' + bmi.toFixed(2);
    } else {
        // Tampilkan pesan kesalahan jika input tidak valid
        document.getElementById('hasilBmi').innerText = 'Mohon masukkan nilai yang valid.';
    }
});