import { Selector } from "testcafe"

const resultLiquid = Selector('.resultLiquid');
const resultWeight = Selector('.resultWeight');


fixture `Converter`
    .page (`./index.html`);
 
// first test
test("Create new weight converter", async t => {
    await t
    .wait(2000) // wait for 2 seconds
    .setTestSpeed(0.5) // slow down the test

    // pre-assert
    // first expect the results value to be empty
    .expect(Selector(".resultWeight").innerText).contains("")

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
    // now expect that the results value is 0.340194 kilogram(s)
<<<<<<< HEAD
    .expect(Selector(".resultWeight").innerText).contains("Result: 0.340194 kilogram(s)")
=======
    .expect(resultWeight.textContent).eql("Result: 0.340194 kilogram(s)");
    // .expect(Selector(".resultWeight").innerText).contains("Result: 0.340194 kilogram(s)")
>>>>>>> parent of bb5dee3 (added small adjustments like deleting .js on import links)
    
});

// second test
test("Create new liquid converter", async t => {
    await t
    .wait(2000) // wait for 2 seconds

    .setTestSpeed(0.5) // slow down the test

    // pre-assert
    // first expect the results value to be empty
    .expect(Selector(".resultWeight").innerText).contains("")

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
    // now expect that the results value is 47.317648000000005 cl
<<<<<<< HEAD
    .expect(Selector(".resultLiquid").innerText).contains("Result: 47.317648000000005 cl")
=======
    .expect(resultLiquid.textContent).eql("Result: 47.317648000000005 cl");
    // .expect(Selector(".resultLiquid").innerText).contains("Result: 47.317648000000005 cl")
>>>>>>> parent of bb5dee3 (added small adjustments like deleting .js on import links)
    
});