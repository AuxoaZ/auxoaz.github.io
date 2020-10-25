

document.getElementById('love').addEventListener('click', function () {

    let image = document.getElementById('imageHarta');
    // image.innerHTML = '<img src="img/als.png" width="200px" height="200px" alt="" class="d-flex" class="">';
    image.classList.toggle('d-none');

    let lope2 = document.getElementById('lope2');
    lope2.innerHTML = `  <div class="row justify-content-center align-items-center ">
    <div class="col-3 col-lg-1 pl-0 ml-0" id="love">
    <a href="date.html"><img src="img/giphy.gif" class="love" alt="" id="annivDate"></a>

    </div>
</div>
<div class="row justify-content-center align-items-center" >
    <div class=" col-6 col-lg-3">
        <p style=" color: whitesmoke;" class="pl-4">Pencet lagi dong, kali ini beda lagi loh</p>
    </div>
</div>`;

});



