import { Selector } from "testcafe"

fixture `Converter`
    .page (`./index.html`);
 
// first test
test("Create new weight converter", async t => {
    await t

    // pre-assert
    // .expect(Selector(".resultWeight").innerText).contains("")
    .expect(Selector("#convertFromWeight").innerText).contains("Pound")

    // arange
    .click(Selector("#convertFromWeight"))

    // act
    .click(Selector(".ounce"))

    .click(Selector("#amountWeight"))

    .typeText(Selector("#amountWeight"), "12")

    .click(Selector("#convertToWeight"))

    .click(Selector(".kilogram"))

    .click(Selector("#convertBtnWeight"))

    // assert
    .expect(Selector(".resultWeight").innerText).contains("Result: 0.340194 kilogram(s)")
    
});

// second test
test("Create new liquid converter", async t => {
    await t

    // pre-assert
    // .expect(Selector(".resultWeight").innerText).contains("")
    .expect(Selector("#convertFromLiquid").innerText).contains("Fluid Ounce")

    // arange
    .click(Selector("#convertFromLiquid"))

    // act
    .click(Selector(".cup"))

    .click(Selector("#amountLiquid"))

    .typeText(Selector("#amountLiquid"), "2")

    .click(Selector("#convertToLiquid"))

    .click(Selector(".cl"))

    .click(Selector("#convertBtnLiquid"))

    // assert
    .expect(Selector(".resultLiquid").innerText).contains("Result: 47.317648000000005 cl")
    
});