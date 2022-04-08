'use strict'

const saveBtn = document.querySelector('.save-btn')
const input = document.querySelector('input')
const text = document.querySelector('text')


saveBtn.addEventListener('click', function () {
    localStorage.setItem('text', input.value)
})

console.log(localStorage);
