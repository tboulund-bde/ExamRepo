<template>
  <div class="box-1">
    <div class="calculator">
      <div class="calculator-display">
        {{ displayValue }}
      </div>
      <div class="calculator-buttons">
        <button class="clear-btn" @click="clear">C</button>
        <button @click="appendToDisplay('7')">7</button>
        <button @click="appendToDisplay('8')">8</button>
        <button @click="appendToDisplay('9')">9</button>
        <button class="operation-btn" @click="appendToDisplay('+')">+</button>
        <button @click="appendToDisplay('4')">4</button>
        <button @click="appendToDisplay('5')">5</button>
        <button @click="appendToDisplay('6')">6</button>
        <button class="operation-btn" @click="appendToDisplay('-')">-</button>
        <button @click="appendToDisplay('1')">1</button>
        <button @click="appendToDisplay('2')">2</button>
        <button @click="appendToDisplay('3')">3</button>
        <button class="operation-btn" @click="appendToDisplay('*')">*</button>
        <button @click="appendToDisplay('0')">0</button>
        <button @click="appendToDisplay('.')">.</button>
        <button class="operation-btn" @click="calculateResult">=</button>
        <button class="operation-btn" @click="appendToDisplay('/')">/</button>
      </div>
    </div>
    <div>
      <h1 class="discriptionHeading">Calculate whatever you want!</h1>
      <p>This is a simple calculator, so use it, brake it, do what you want!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Calculator",
  data() {
    return {
      displayValue: "0",
      expression: "",
    };
  },
  methods: {
    appendToDisplay(value: string) {
      if (this.displayValue === "0" && value !== "0") {
        this.displayValue = value;
      } else {
        this.displayValue += value;
      }
      this.expression += value;
    },
    clear() {
      this.displayValue = "0";
      this.expression = "";
    },
    calculateResult() {
      try {
        this.displayValue = eval(this.expression);
        this.expression = this.displayValue;
      } catch (error) {
        this.displayValue = "Error";
      }
    },
  },
});
</script>

<style scoped>
.box-1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 100px;
  gap: 100px;
}

.discriptionHeading {
  font-size: 30px;
  font-weight: bold;
  color: #ffa500;
}
.calculator {
  display: inline-block;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.calculator-display {
  text-align: right;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: #f5f5f5;
  font-size: 20px;
  font-weight: bold;
}

.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.operation-btn {
  background-color: #ffa500;
  font-size: 20px;
  font-weight: bold;
}

.clear-btn {
  background-color: #445566;
  color: #f5f5f5;
}

button {
  padding: 10px;
  border: none;
  background-color: #eee;
  cursor: pointer;
}

button:hover {
  background-color: #ccc;
}
</style>
