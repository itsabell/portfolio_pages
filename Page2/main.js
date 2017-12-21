var mass=['all','print','web','user', 'mock'];
var i=0;
var x;
var active='all';
document.getElementById(active).style.color = '#ff2d2d';
document.getElementById(active).style.borderBottom = '2px solid #ff2d2d';
function smena(elem) {
    if(active!=elem.id) {
        document.getElementById(elem.id).style.color = '#ff2d2d';
        document.getElementById(elem.id).style.borderBottom = '2px solid #ff2d2d';
        while (i < 5) {
            if (elem.id != mass[i]) {
                document.getElementById(mass[i]).style.color = '#434343';
                document.getElementById(mass[i]).style.borderBottom = '2px solid #434343';
            }
            i++;
        }
        i = 0;
        active = elem.id;
        switch (elem.id) {
            case 'all':
                x = [1, 2, 3, 4, 5, 6, 7, 8];
                break;
            case 'print':
                x = [1, 2];
                break;
            case 'web':
                x = [3, 4];
                break;
            case 'user':
                x = [5];
                break;
            case 'mock':
                x = [6, 7, 8];
                break;
        }
        i = 1;
        while (i < 9) {
            document.getElementById(i.toString()).style.display = 'none';
            i++;
        }
        i = 0;
        while (i < x.length) {
            document.getElementById(x[i]).style.display = 'inline-block';
            i++;
        }
        i = 0;
        x = 0;
    }
}
function hover(elem) {
    if (elem.id!=active){
        document.getElementById(elem.id).style.color = '#ff2d2d';
        document.getElementById(elem.id).style.borderBottom = '2px solid #ff2d2d';
    }
}
function unhover(elem){
    if (elem.id!=active){
        document.getElementById(elem.id).style.color = '#434343';
        document.getElementById(elem.id).style.borderBottom = '2px solid #434343';
    }
}
function rabs_hover(elem) {
    document.getElementById(elem.id+'_d').style.height='30px';
}
function rabs_unhover(elem) {
    document.getElementById(elem.id+'_d').style.height='0px';
}
function rabs_smena(elem) {
    var click_img = document.getElementById(elem.id).style.backgroundImage;
    var click_imya = document.getElementById(elem.id+'_t').innerHTML;
    document.getElementById(elem.id).style.backgroundImage=document.getElementById('main_rab').style.backgroundImage;
    document.getElementById(elem.id+'_t').innerHTML=document.getElementById('main_rab_t').innerHTML;
    document.getElementById('main_rab').style.backgroundImage=click_img;
    document.getElementById('main_rab_t').innerHTML=click_imya;
}
function menu() {
    if(document.getElementById('min_men').style.display=='none'){
        document.getElementById('min_men').style.display='block';
    }
    else {
        document.getElementById('min_men').style.display='none';
    }
}