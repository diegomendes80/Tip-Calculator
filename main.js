const billInput = document.querySelector('#bill-input');
const percent__items = document.querySelectorAll('.items__item');
let tip_percent;
const peopleInput = document.querySelector('#people-input');
const item__custom = document.querySelector('.items__custom');
const input__custom = document.querySelector('.items__input');
const buttonCalcReset = document.querySelector('.results__resetButton');
const percentList = [5, 10, 15, 25, 50];

//Função que pega o valor da tip-percent 
for(let i=0; i < percent__items.length; i++){
    percent__items[i].addEventListener('click', function(){
        tip_percent = percentList[i] / 100;
        percent__items[i].classList.add('selected-input');
    })
}


// T Função que mostra o input custom pra inserir uma porcentagem personalizada
item__custom.addEventListener('click', function () {
    item__custom.style.display = 'none';
    input__custom.style.display = 'block';

    // tip_percent = parseFloat(input_custom.value)/100;
})

input__custom.addEventListener('input', function () {
    tip_percent = parseFloat(input__custom.value) / 100;
});


// Função que calcula tip-amount por pessoa e o total por pessoa
function calcTipAndTotal(){
    const bill = parseFloat(billInput.value);
    const people = parseInt(peopleInput.value);

    if (isNaN(bill) || isNaN(people) || isNaN(tip_percent) || people <= 0) {
        alert("Por favor, insira valores válidos.");
        resetValues();
        return;
    }

    const tipAmountPerson = ((bill * tip_percent) / people).toFixed(2);
    const totalPerson = ((bill / people) + parseFloat(tipAmountPerson)).toFixed(2);

    atualizaValores(tipAmountPerson, totalPerson);
    
}


// Função que mostra os valores
function atualizaValores(tip_amount, total){
    document.querySelector('.tip-amount__value').textContent = `$${tip_amount}`;
    document.querySelector('.total__value').textContent = `$${total}`;

}


// Função que limpa os inputs e reseta:
function resetValues(){
    document.querySelector('.tip-amount__value').textContent = "$0.00";
    document.querySelector('.total__value').textContent = "$0.00";

    billInput.value = '';
    peopleInput.value = '';
    input__custom.value = '';
    item__custom.style.display = 'block';
    input__custom.style.display = 'none';

    
        for(let i=0; i < percent__items.length; i++){
            percent__items[i].classList.remove('selected-input');
        
        }

}

buttonCalcReset.addEventListener('click', function(){
    
    if(buttonCalcReset.classList.contains('calc__button')){
        calcTipAndTotal();
        buttonCalcReset.classList.remove('calc__button');
        buttonCalcReset.textContent = 'RESET';
    }
    else{
        resetValues();
        buttonCalcReset.classList.add('calc__button');
        buttonCalcReset.textContent = 'CALC';
       
    }
})

