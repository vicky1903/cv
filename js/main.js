function nodeClicked(elem) {
    let is_active = elem.classList.contains('active');
    let array = document.getElementsByClassName('active');
    for (let i = array.length; i > 0; i--) {
        array[i - 1].classList.remove('active');
    }
    if (is_active === false) {
        let details = document.getElementById(elem.id + '_text');
        console.log(elem.id + '_text');
        details.classList.add('active');
        elem.classList.add('active');
    }
}