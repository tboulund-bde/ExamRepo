export function americanConverter(element: HTMLButtonElement) {
    // from pound to european weights
    // Store the static number of weights from pound to european weights
    let poundToGram:number = 453.59237;
    let poundToKilogram:number = poundToGram / 1000;

    // Function to calculate pound to gram
    function calculatePoundToGram (pound: number) {
    return pound * poundToGram;
    }

    console.log(calculatePoundToGram (5), "grams");



    // function to calculate pound to kilogram
    function calculatePoundToKilogram (pound: number) {
    return pound * poundToKilogram;
    }

    console.log(calculatePoundToKilogram (5), "kilograms");




    // from ounce to european weights
    // Store the static number of weights from ounce to european weights
    let ounceToGram:number = 28.3495;
    let ounceToKilogram:number = ounceToGram / 1000;


    // Function to calculate ounce to gram
    function calculateOunceToGram (ounce: number) {
    return ounce * ounceToGram;
    }

    console.log(calculateOunceToGram (5), "grams");



    // function to calculate ounce to kilogram
    function calculateOunceToKilogram (ounce: number) {
    return ounce * ounceToKilogram;
    }

    console.log(calculateOunceToKilogram (5), "kilograms");


   


  }
  

  
