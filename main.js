const bill = document.querySelector('.bill');
const people = document.querySelector('.people');
const tipAmount = document.querySelector('.tip');
const toPayPerPerson = document.querySelector('.split');
const five = document.querySelector('.five');
const ten = document.querySelector('.ten');
const fifteen = document.querySelector('.fifteen');
const twentyFive = document.querySelector('.twenty-five');
const fifty = document.querySelector('.fifty');
const customTip = document.querySelector('.custom-tip');
const reset = document.querySelector('.reset-button');
const prompt = document.querySelector('.people-prompt')

let billAmount = 0;
let tippingPercent = 0;
let amountOfPeople = 0;

const handleBill = (e) => {
    billAmount = Number(e.target.value);
    if (amountOfPeople > 0) {
        calculateAmountToPay(billAmount, tippingPercent, amountOfPeople);
    }
}

const handleTip = (button) => {
    tippingPercent = Number(button.value);
    if (amountOfPeople > 0) {
        calculateAmountToPay(billAmount, tippingPercent, amountOfPeople);
    }
}

const handlePeople = (e) => {
        if (e.target.value && e.target.value === '0'){
            prompt.classList.remove('hidden')
        } else if (e.target.value && Number(e.target.value) > 0){
            prompt.classList.add('hidden')
            amountOfPeople = Number(e.target.value);
            calculateAmountToPay(billAmount, tippingPercent, amountOfPeople);
        } else {
            prompt.classList.add('hidden')
        }
    } 

const handleCustomTip = (e) => {
    if (e.target.value > 0) {
        tippingPercent = e.target.value;
        calculateAmountToPay(billAmount, tippingPercent, amountOfPeople);
    }
}

const handleReset = () => {
    billAmount = 0;
    tippingPercent = 0;
    amountOfPeople = 0;
    tipAmount.textContent = '£';
    toPayPerPerson.textContent = '£';
    bill.value = '';
    people.value = '';
    prompt.classList.add('hidden')
}

bill.addEventListener('keyup', handleBill);
people.addEventListener('keyup', handlePeople);
five.addEventListener('click', () => {handleTip(five)});
ten.addEventListener('click', () => {handleTip(ten)});
fifteen.addEventListener('click', () => {handleTip(fifteen)});
twentyFive.addEventListener('click', () => {handleTip(twentyFive)});
fifty.addEventListener('click', () => {handleTip(fifty)});
customTip.addEventListener('keyup', handleCustomTip);
reset.addEventListener('click', handleReset);

const calculateTip = (total, tipPercentage) => {
    return (total/100) * tipPercentage;
}

const calculateTipPerPerson = (total, tipPercentage, people) => {
    return (calculateTip(total, tipPercentage) / people).toFixed(2);
}

const calculateSplitBill = (total, people) => {
    return (total / people).toFixed(2);
}

const calculateAmountToPay = (bill, tipPercentage, people) => {
    const total = (bill + calculateTip(bill, tipPercentage)).toFixed(2);
    const tipPP = calculateTipPerPerson(bill, tipPercentage, people);
    if (tipPP >= 0){
        tipAmount.textContent = '£'+tipPP;
    } else {
        tipAmount.textContent = '£0.00';
    }
    toPayPerPerson.textContent = '£'+ calculateSplitBill(total, people);
}
