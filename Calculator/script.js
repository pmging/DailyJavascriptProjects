(function(){

    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.btn-clear');
    const equal = document.querySelector('.btn-equal');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function(e){
        if (screen.value === '') {
            screen.value = "";
        } else {
            let expression = screen.value;
            let answer = eval(expression);
            console.log(expression);
            console.log(answer);
            screen.value = answer;
        }
    })
    
    clear.addEventListener('click', () => {
        screen.value = "";
    });

})();
