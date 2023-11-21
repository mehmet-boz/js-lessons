document.addEventListener("DOMContentLoaded", () => {
    const counters = document.getElementsByClassName('counter');

    for (let item of counters) {
        const minusBtn = item.getElementsByClassName('minus')[0]
        const plusBtn = item.getElementsByClassName('plus')[0]
        const display = item.getElementsByClassName('display')[0]

        const minValue = parseInt(display.getAttribute('data-min'))
        const maxValue = parseInt(display.getAttribute('data-max'))

        let value = parseInt(display.innerHTML);
        
        minusBtn.addEventListener('click', decrease)
        plusBtn.addEventListener('click', increase)

        function decrease() {
            if (value === minValue) {
                return
            } else {
                value--
                display.innerHTML = value
            }

        }

        function increase() {
            if (value === maxValue) {
                return
            } else {
                value++
                display.innerHTML = value
            }

        }
    }
});

