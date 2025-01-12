const click = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = function() {
    if (cookie.width == 200) {
        cookie.width = 170;
        click.textContent ++;
    }

    else  {
        cookie.width = 200;
        click.textContent ++;
    }
}