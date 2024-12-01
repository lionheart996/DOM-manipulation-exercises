document.addEventListener('DOMContentLoaded', solve);

function solve() {

    document.querySelector('#encode').addEventListener('submit', (e) => {
        e.preventDefault();

        const inputEl = e.target.querySelector('textarea');
        const messege = inputEl.value
        
        const encodedMessege = messege.split('').map(ch => String.fromCharCode( ch.charCodeAt() + 1) ).join('');
        document.querySelector('#decode textarea').value = encodedMessege

        inputEl.value = ''
    })

    document.querySelector('#decode').addEventListener('submit', (e) => {
        e.preventDefault()

        const outputEl = e.target.querySelector('textarea');
        const messege = outputEl.value;

        const decodedMessege = messege.split('').map(ch => String.fromCharCode( ch.charCodeAt() - 1) ).join('')

        outputEl.value = decodedMessege
    })
}