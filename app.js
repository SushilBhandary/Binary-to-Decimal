

const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let sum = 0, p = 0;
    const binary = document.querySelector('#binary').value
    for (let i = binary.length-1; i >= 0; i--) {
        sum += parseInt(binary[i]) * Math.pow(2,p++)
    }
    result.innerHTML= `Decimal Number : ${sum}`
})
