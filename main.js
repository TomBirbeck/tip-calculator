const bill = document.querySelector('.bill')
const people = document.querySelector('.people')
const tipAmount = document.querySelector('.tip-amount')
const toPayPerPerson = document.querySelector('.total-per-person')
const five = document.querySelector('.five')
const ten = document.querySelector('.ten')
const fifteen = document.querySelector('.fifteen')
const twentyFive = document.querySelector('.twenty-five')
const fifty = document.querySelector('.fifty')
const custom = document.querySelector('.custom')
const reset = document.querySelector('.reset-button')

let billAmount = 0;
let tippingPercent = 0;
let amountOfPeople = 0;

const handleBill = (e) => {
    billAmount = Number(e.target.value)
    calculateAmountToPay(billAmount, tippingPercent, amountOfPeople)
}

const handleTip = (button) => {
    tippingPercent = Number(button.value)
}

const handlePeople = (e) => {
    amountOfPeople = e.target.value
    calculateAmountToPay(billAmount, tippingPercent, amountOfPeople)
}

bill.addEventListener('change', handleBill)
people.addEventListener('change', handlePeople)
five.addEventListener('click', () => {handleTip(five)})

const calculateTip = (total, tipPercentage) => {
    return (total/100) * tipPercentage
}

const calculateTipPerPerson = (total, tipPercentage, people) => {
    return calculateTip(total, tipPercentage) / people
}

const calculateSplitBill = (total, people) => {
    return total / people
}

const calculateAmountToPay = (bill, tipPercentage, people) => {
    const tip = calculateTip(bill, tipPercentage)
    const total = bill + tip
    tipAmount.textContent = tip
    toPayPerPerson.textContent = total / people
    console.log({bill, tipPercentage, people, tip, total})
}
