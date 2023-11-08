import { Selector } from "testcafe"

fixture`CalculatorTest`
    .page("./index.html");

test("test1", async t => {
    await t
.typeText("#numA", "1")
.typeText("#numB", "2")
.click("#mul")

.expect(Selector("#result").innerText).eql("2");
});

test("test2", async t => {
    await t
.typeText("#numA", "400")
.typeText("#numB", "600")
.click("#add")

.expect(Selector("#result").innerText).eql("1000");
});