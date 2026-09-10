const convertButton = document.querySelector(".convert-button")

function convertCurrency() {
    const inputCurrencyValue= document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")//Outras moedas

    const dolarToday = 5.2

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

    console.log(convertedValue)
}



convertButton.addEventListener("click", convertCurrency)