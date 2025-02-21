function showBuyerForm() {
    document.getElementById('buyer-form').style.display = 'block';
    document.getElementById('seller-form').style.display = 'none';
    document.querySelector('.home-screen').style.display = 'none';
}

function showSellerForm() {
    document.getElementById('seller-form').style.display = 'block';
    document.getElementById('buyer-form').style.display = 'none';
    document.querySelector('.home-screen').style.display = 'none';
}
