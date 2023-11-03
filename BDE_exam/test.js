import { Selector } from "testcafe"

fixture`Converter`
    .page("./index.html");

// first test
test("Create new weight converter", async t => {
    await t

    .expect(Selector("#convertFromWeight").innerText).contains("Pound")

    .click('#convertFromWeight')

    .click(Selector(".ounce"))

    .click(Selector("#amountWeight"))

    .typeText(Selector("#amountWeight"), "12")

    .click('#convertToWeight')

    .click(Selector(".kilogram"))

    .click(Selector("#convertBtnWeight"))

    .expect(Selector(".resultWeight").innerText).contains("Result: 0.340194 kilogram(s)")
    
});

// second test
test("Create new liquid converter", async t => {
    await t

    .expect(Selector("#convertFromLiquid").innerText).contains("Fluid Ounce")

    .click('#convertFromLiquid')

    .click(Selector(".cup"))

    .click(Selector("#amountLiquid"))

    .typeText(Selector("#amountLiquid"), "2")

    .click('#convertToLiquid')

    .click(Selector(".cl"))

    .click(Selector("#convertBtnLiquid"))

    .expect(Selector(".resultLiquid").innerText).contains("Result: 47.317648000000005 cl")
    
});