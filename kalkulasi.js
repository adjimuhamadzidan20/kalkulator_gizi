document.getElementById('hasil_bmr').style.display = 'none';
document.getElementById('informasi_tambahan').style.display = 'none';

let namaUser = document.getElementById('hasil_nama');
let jenkelUser = document.getElementById('hasil_jenkel');
let usiaUser = document.getElementById('hasil_usia');

let tbUser = document.getElementById('hasil_tb');
let bbUser = document.getElementById('hasil_bb');

let hasilhitung = document.getElementById('hasil_hitung');
let hasilaktif = document.getElementById('hasil_aktifitas');
let hasilakhir = document.getElementById('hasil_akhir');
let hasilkalori = document.getElementById('hasil_kalori');

let protein = document.getElementById('protein');
let karbo = document.getElementById('karbo');
let lemak = document.getElementById('lemak');

let protein2 = document.getElementById('protein_2');
let karbo2 = document.getElementById('karbo_2');
let lemak2 = document.getElementById('lemak_2');

let check =  document.getElementById('hitung_bmi');
let loading = document.getElementById('load_check');

// reset form 
let reset = document.getElementById('reset');
reset.addEventListener('click', function() {
	let nama = document.getElementById('nama').value = "";
	let jenKel = document.getElementById('jenis_kelamin').value = "";
	let usia = document.getElementById('usia').value = "";
	let tinggibadan = parseInt(document.getElementById('tinggi_badan').value = "");
	let beratbadan = parseInt(document.getElementById('berat_badan').value = "");
	let aktifitas = document.getElementById('aktifitas').value = "";
})

// submit form
let hitung_bmi = document.getElementById('hitung_bmi');
hitung_bmi.addEventListener('click', function() {
	let nama = document.getElementById('nama').value;
	let jenKel = document.getElementById('jenis_kelamin').value;
	let usia = document.getElementById('usia').value;
	let tinggibadan = parseInt(document.getElementById('tinggi_badan').value);
	let beratbadan = parseInt(document.getElementById('berat_badan').value);
	let aktifitas = document.getElementById('aktifitas').value;

	if (nama == "" || jenKel == "" || usia == "" || tinggibadan == "" || beratbadan == "" || aktifitas == "") {
		let alert = '<div class="alert alert-info small" role="alert">Kolom input tidak boleh kosong!</div>';
		popup.innerHTML = alert;
		return false;
	} 
	else {
		if (true) {
			loading.innerHTML = `<button type="button" class="btn btn-info text-white w-100" id="button-ck">
						                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
						                Check
						            	</button>`;
			check.style.display = 'none';

			setTimeout(function hasilAkg() {
				if (jenKel == 'Laki-laki') {
					let rumus_pria = 66 + (13.7 * beratbadan) + (5 * tinggibadan) - (6.8 * usia);

					if (aktifitas == 'Sangat jarang berolahraga') {
						let nilai = 1.2;
						let total = rumus_pria * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilakhir.innerHTML = parseInt(rumus_pria) + ' Kkal';
						hasilhitung.innerHTML = parseInt(total) + ' Kkal';

						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);

						// console.log(total);
					} 
					else if (aktifitas == 'Jarang olahraga') {
						let nilai = 1.375;
						let total = rumus_pria * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_pria) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';
						
						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);

						// console.log(total);
					} 
					else if (aktifitas == 'Cukup olahraga') {
						let nilai = 1.55;
						let total = rumus_pria * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_pria) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';
						
						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);

						// console.log(total);
					} 
					else if (aktifitas == 'Sering olahraga') {
						let nilai = 1.725;
						let total = rumus_pria * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_pria) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';
						
						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);

						// console.log(total);
					} 
					else if (aktifitas == 'Sangat sering olahraga') {
						let nilai = 1.9;
						let total = rumus_pria * nilai;
						
						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_pria) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';
						
						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);

						// console.log(total);
					}
				} 
				else if (jenKel == 'Perempuan') {
					let rumus_wanita = 655 + (9.6 * beratbadan) + (1.8 * tinggibadan) - (4.7 * usia);

					if (aktifitas == 'Sangat jarang berolahraga') {
						let nilai = 1.2;
						let total = rumus_wanita * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_wanita) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';

						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);

						// console.log(total);
					} 
					else if (aktifitas == 'Jarang olahraga') {
						let nilai = 1.375;
						let total = rumus_wanita * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_wanita) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';

						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);
						
						// console.log(total);
					} 
					else if (aktifitas == 'Cukup olahraga') {
						let nilai = 1.55;
						let total = rumus_wanita * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_wanita) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';

						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);

						// console.log(total);
					} 
					else if (aktifitas == 'Sering olahraga') {
						let nilai = 1.725;
						let total = rumus_wanita * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_wanita) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';

						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);
						
						// console.log(total);
					} 
					else if (aktifitas == 'Sangat sering olahraga') {
						let nilai = 1.9;
						let total = rumus_wanita * nilai;

						let nilaiProtein = 0.15;
						let nilaiKarbo = 0.6;
						let nilaiLemak = 0.15;

						let hasilProtein = nilaiProtein * total / 4;
						let hasilKarbo = nilaiKarbo * total / 4;
						let hasilLemak = nilaiLemak * total / 9;

						hasilhitung.innerHTML = parseInt(rumus_wanita) + ' Kkal';
						hasilakhir.innerHTML = parseInt(total) + ' Kkal';

						hasilkalori.innerHTML = parseInt(total);
						protein.innerHTML = parseInt(hasilProtein) + ' Gram';
						karbo.innerHTML = parseInt(hasilKarbo) + ' Gram';
						lemak.innerHTML = parseInt(hasilLemak) + ' Gram';

						protein2.innerHTML = parseInt(hasilProtein);
						karbo2.innerHTML = parseInt(hasilKarbo);
						lemak2.innerHTML = parseInt(hasilLemak);

						// console.log(total);
					}
				}

				document.getElementById('hasil_bmr').style.display = 'block';
				document.getElementById('informasi_tambahan').style.display = 'block';
				document.getElementById('form_bmr_1').style.display = 'none';
				document.getElementById('form_bmr_2').style.display = 'none';
			}, 1200);
		}
	}

	namaUser.innerHTML = nama;
	jenkelUser.innerHTML = jenKel;
	usiaUser.innerHTML = usia + ' tahun';
	tbUser.innerHTML = tinggibadan + ' cm';
	bbUser.innerHTML = beratbadan + ' kg';
	hasilaktif.innerHTML = aktifitas;
});

let popup = document.getElementsByClassName('pesan')[0];
if (popup.style.display = 'block') {
  setTimeout(function() {
    popup.style.opacity = '0'
    popup.style.transition = 'opacity 1s ease-in-out';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 1000)
  }, 2500);
}