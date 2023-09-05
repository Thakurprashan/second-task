let string = "";
let buttons = document.querySelectorAll('.button');
let value = document.querySelectorAll('.button').values;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == '=') {
                string = eval(string);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'AC') {
                string = "";
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == '%') {
                string =Math.percentage(string);
                document.querySelector(input).value = string;
            }
            else if (e.target.innerHTML == '√') {
                string = Math.sqrt(string);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'sin') {
                string = Math.sin(string);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'cos') {
                string = Math.cos(string);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'tan') {
                string = Math.tan(string);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'C') {
                string = string.slice(0, string.length - 1);
                document.querySelector('input').value = string;
            }
            else {
                console.log(e.target)
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        } catch {
            document.querySelector('input').value = 'SYNTAX ERROR';
        }
    })
})