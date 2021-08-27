const title = document.querySelector('#title')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const submit = document.querySelector('.btn')
const bookList = document.querySelector('#book-list')

submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('kali rakchen kn bhai')
    }
    else {
        const newRow = document.createElement('tr');

        //creating new title

        const newTitile = document.createElement('th');
        newTitile.innerHTML = title.value;
        newRow.appendChild(newTitile);
        title.value = ''

        const newAutor = document.createElement('th');
        newAutor.innerHTML = author.value;
        newRow.appendChild(newAutor);
        author.value = ''

        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);
        year.value = ''

        bookList.appendChild(newRow);
    }
})


