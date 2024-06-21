import React, {useState} from 'react';
import './App.css'; // Create this file for CSS styles

const khodamArray = [
  "Kue Sus", "Ayam Goreng", "Naga Merah", "Allucard", "Kopi Luwak", "Sate Kelinci",
  "Pocong Kece", "Batu Akik", "Singa Laut", "Jenderal Mie", "Es Cincau", "Durian Merah",
  "Kancil Pintar", "Bakso Bakar", "Raja Singa", "Bubur Kacang Ijo", "Kura-Kura Ninja",
  "Laut Biru", "Cendol Segar", "Srikandi Cantik", "Bambu Runcing", "Gajah Terbang",
  "Udang Merah", "Sate Padang", "Layang-Layang", "Harimau Jawa", "Burung Hantu",
  "Nasi Uduk", "Komodo Perkasa", "Roti Bakar", "Ikan Mas", "Ular Sanca", "Laut Selatan",
  "Mangga Madu", "Cumi-Cumi", "Kopi Susu", "Angsa Putih", "Serigala Biru", "Banteng Liar",
  "Ayam Penyet", "Raja Rimba", "Monyet Pintar", "Madu Hitam", "Kupu-Kupu", "Putri Salju",
  "Kacang Hijau", "Kucing Emas", "Ikan Hiu", "Lidah Buaya", "Tupai Merah", "Susu Murni",
  "Kembang Desa", "Bebek Peking", "Mangga Harum", "Kelinci Putih", "Teratai Merah",
  "Gurita Laut", "Mawar Merah", "Rusa Kencana", "Ikan Paus", "Petir Biru", "Nasi Goreng",
  "Singa Putih", "Ular Cobra", "Kue Lapis", "Belalang Tempur", "Jeruk Manis", "Anggur Merah",
  "Bunga Matahari", "Pisang Goreng", "Batik Megah", "Nasi Kuning", "Buaya Darat",
  "Merpati Putih", "Bintang Jatuh", "Laba-Laba", "Kerbau Hitam", "Kepiting Laut",
  "Durian Montong", "Bunga Melati", "Kelapa Muda", "Lumba-Lumba", "Burung Elang",
  "Kucing Oren", "Angin Ribut", "Kambing Hitam", "Pisang Raja", "Merah Putih", "Ikan Pari",
  "Bunglon Biru", "Buaya Putih", "Kembang Sakura", "Harimau Putih", "Kuda Hitam",
  "Mangga Arumanis", "Kuda Laut", "Bunga Anggrek", "Semangka Merah", "Ular Piton",
  "Telur Dadar", "Es Doger"
];

const App = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [khodam, setKhodam] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomKhodam = khodamArray[Math.floor(Math.random() * khodamArray.length)];
    setKhodam(`${randomKhodam}`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Cek Khodam',
        text: `${khodam} dan kunjungi www.cekkhodam.com`,
        url: 'https://www.cekkhodam.com',
      });
    } else {
      alert('Fitur share tidak didukung oleh browser ini.');
    }
  };

  return (
    <div className="container">
      <div class="ring">
        <p />
        <i style={{'--clr': '#00ff0a'}}></i>
        <i style={{'--clr': '#ff0057'}}></i>
        <i style={{'--clr': '#fffd44'}}></i>
        <div class="login">
          <h2>Check Khodam Mu!</h2>
          <form onSubmit={handleSubmit} className="form">
            <div class="inputBx">
              <input
                type="text" placeholder="Nama"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />
            <div class="inputBx">
              <input
                placeholder="Asal Kota"
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required />
            </div>
            <br />
            <div class="inputBx">
              <input type="submit" value="CEK!" />
            </div>
          </form>
          {khodam && (
            <>
              <p className="result">
                <p className="khodam-p">Khodam kamu adalah </p>

                <b className="res-khodam"> {khodam}</b></p>
              <button onClick={handleShare} className="button-share">Share</button>
            </>
          )}
        </div>
      </div>

      <footer className="footer">
        Made with ❤️
        <a
          href="https://www.instagram.com/zidniryi/"
          target="_blank"
          rel="noopener noreferrer"
        ><b> @Zidniryi </b></a
        >
      </footer>
    </div>
  );
};

export default App;