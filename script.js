function displayValue () {
    const calcKeysEle = document.querySelectorAll('button');
    const displayEle = document.querySelector('.display');

    calcKeysEle.forEach  (button => {
        button.addEventListener('click', () =>{
            console.log (button)
        })
    })
}

displayValue()
