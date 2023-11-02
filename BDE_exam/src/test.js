import { Selector } from "testcafe"

fixture`Converter`
    .page("./index.html");

test("Create new weight converter", async t => {
    await t

    .expect(Selector("#convertFromWeight").innerText).contains("Pound")

    .click('#convertFromWeight')

    .click(Selector(".ounce"))

    .click(Selector("#amountWeight"))

    .typeText(Selector("#amountWeight"), "12")

    .click('#convertToWeight')

    .click(Selector(".kilogram"))

    .click(Selector("#convertBtn"))

    .expect(Selector(".resultWeight").innerText).contains("Result: 0.340194 kilogram(s)")
    
});