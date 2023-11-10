import { Selector } from "testcafe";

// Test #1, testing addition
fixture`Calculator Tests`.page`http://calculator.goulashsup.dk/`;

test("Addition Test", async (t) => {
  await t
    .click(Selector("button").withText("1"))
    .click(Selector("button").withText("+"))
    .click(Selector("button").withText("2"))
    .click(Selector("button").withText("="))
    .expect(Selector(".calculator-display").innerText)
    .eql("3");
});

// Test #2, testing error handling
fixture`Calculator Tests`.page`http://calculator.goulashsup.dk/`;

test("Error Handling Test", async (t) => {
  await t
    .click(Selector("button").withText("1"))
    .click(Selector("button").withText("/"))
    .click(Selector("button").withText("0"))
    .click(Selector("button").withText("="))
    .expect(Selector(".calculator-display").innerText)
    .eql("Infinity");
});
