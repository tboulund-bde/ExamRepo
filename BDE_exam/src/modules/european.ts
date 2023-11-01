export function americanConverter(element: HTMLButtonElement) {
    // from gram to american weights
    // Store the static number of weights from gram to american weights
    let gramToPound:number = 453.59237;
    let gramToOunce:number = gramToPound / 16;
    let gramToTon:number = 0.0005;


    // Function to calculate gram to pound
    function calculateGramToPound (gram: number) {
    return gram / gramToPound;
    }

    console.log(calculateGramToPound (5), "gram to pounds");



    // function to calculate gram to ounce
    function calculateGramToOunce (ton: number) {
    return ton / gramToOunce;
    }

    console.log(calculateGramToOunce (5), "gram to ounces");


    // function to calculate ounce to metric ton
    function calculateGramToTon(gram: number) {
    return gram * gramToTon;
    }

    console.log(calculateGramToTon (5), "gram to tons");







    // from kilogram to american weights
    // Store the static number of weights from kilogram to american weights
    let kilogramToPound:number = 453.59237;
    let kilogramToOunce:number = kilogramToPound / 16;
    let kilogramToTon:number = 0.0005;


    // Function to calculate kilograms to pound
    function calculateKilogramToPound (kilogram: number) {
    return kilogram / kilogramToPound;
    }

    console.log(calculateKilogramToPound (5), "kilograms to pounds");



    // function to calculate kilograms to ounce
    function calculateKilogramToOunce (kilogram: number) {
    return kilogram / kilogramToOunce;
    }

    console.log(calculateKilogramToOunce (5), "kilograms to ounces");


    // function to calculate kilograms to metric ton
    function calculateKilogramToTon(kilogram: number) {
    return kilogram * kilogramToTon;
    }

    console.log(calculateKilogramToTon (5), "kilograms to tons");







    // from metric ton to american weights
    // Store the static number of weights from metric ton to american weights
    let metricTonToPound:number = 453.59237;
    let metricTonToOunce:number = metricTonToPound / 16;
    let metricTonToTon:number = 0.0005;


    // Function to calculate metric ton to pound
    function calculateMetricTonToPound (metricTon: number) {
    return metricTon / metricTonToPound;
    }

    console.log(calculateMetricTonToPound (5), "metric ton to pounds");



    // function to calculate metric ton to ounce
    function calculateMetricTonToOunce (metricTon: number) {
    return metricTon / metricTonToOunce;
    }

    console.log(calculateMetricTonToOunce (5), "metric ton to ounces");


    // function to calculate metric ton to metric ton
    function calculateMetricTonToTon(metricTon: number) {
    return metricTon * metricTonToTon;
    }

    console.log(calculateMetricTonToTon (5), "metric ton to tons");


  }
  