const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertCurrency() {
    const inputCurrencyValue= document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")//valor em Real
    const currencyValueConverted = document.querySelector(".currency-value")//Outras moedas


    const dolarToday = 5.2
    const euroToday = 6.2


    
    if(currencySelect.value === "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

    }

    if(currencySelect.value === "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-De",{
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("curreny-name")
    const currencyImg = document.querySelector(".currency-img")


    if(currencySelect.value === "dolar"){
        currencyName.innerHTML = "Dólar"
        currencyImg.src = "./assets/dolar.png"
    }

    if(currencySelect.value === "euro"){ 
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertCurrency()
}



currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertCurrency)