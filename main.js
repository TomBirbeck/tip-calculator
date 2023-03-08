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

const calculateTip = (total, tipPercentage) => {
    return ((total/100) * tipPercentage)
}

const calculateTipPerPerson = (total, tipPercentage, people) => {
    return calculateTip(total, tipPercentage) / people
}

const calculateSplitBill = (total, people) => {
    return total / people
}

const amountToPay = (bill, tipPercentage, people) => {
const total = bill + calculateTip(bill, tipPercentage)
return total / people
}

console.log(amountToPay(100,10,2))