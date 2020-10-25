let date = prompt('Tapi ada syaratnya, tebak tanggal jadian kita berapa? diisi tanggalnya aja ya ');

if (date == 13) {
    alert('Okeee kamu bener sayang, sekarang lanjut yaa');
    let month = prompt('Terus bulanya apa hayoh?')
    if (month == 'september' || month == 'September' || month == 09 || month == 9) {
        alert('Tumben kamu benerr XD');

        let a = document.getElementById('nasgor');
        a.classList.toggle('d-none')

        let b = document.getElementById('alis-nasgor');
        b.classList.toggle('d-none')


    } else {
        alert('Ah kamu mah pikun, masa lupa sih -_-');
        let pikun = document.getElementById('pikun');

        let h1 = document.createElement('h4');
        let text = document.createTextNode('Refresh ulang kalo mau nyoba lagi huhuhuhuhhhhh');

        h1.appendChild(text);
        pikun.appendChild(h1);
        pikun.appendChild(h1).style.color = 'white';

    }
} else {
    alert('Ah kamu mah pikun, masa lupa sih -_-');
    let pikun = document.getElementById('pikun');

    let h1 = document.createElement('h4');
    let text = document.createTextNode('Refresh ulang kalo mau nyoba lagi huhuhuhuhhhhh');

    h1.appendChild(text);
    pikun.appendChild(h1).style.color = 'white';
}

