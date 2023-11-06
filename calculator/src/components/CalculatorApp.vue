<template>
  <div class="calculator">
    <div class="calculator-display">
      {{ state.displayValue }}
    </div>
    <div class="calculator-buttons">
      <button @click="clear">C</button>
      <button
        v-for="digit in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]"
        :key="digit"
        @click="appendToDisplay(digit.toString())"
      >
        {{ digit }}
      </button>
      <button class="operation-btn" @click="appendToOperator('+')">+</button>
      <button class="operation-btn" @click="appendToOperator('-')">-</button>
      <button class="operation-btn" @click="appendToOperator('*')">*</button>
      <button class="dot-btn" @click="appendToDisplay('.')">.</button>
      <button class="operation-btn" @click="calculateResult">=</button>
      <button class="operation-btn" @click="appendToOperator('/')">/</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface CalculatorState {
  displayValue: string;
  expression: string;
  operator?: string;
  prevValue?: number;
}

export default defineComponent({
  name: "Calculator",
  setup() {
    const state = ref<CalculatorState>({
      displayValue: "0",
      expression: "",
    });

    function appendToDisplay(value: string) {
      if (state.value.displayValue === "0" || state.value.operator) {
        state.value.displayValue = value;
        state.value.operator = undefined;
      } else {
        state.value.displayValue += value;
      }
      state.value.expression += value;
    }

    function appendToOperator(operator: string) {
      if (!state.value.operator) {
        state.value.operator = operator;
        state.value.expression += operator;
      }
    }

    function clear() {
      state.value.displayValue = "0";
      state.value.expression = "";
      state.value.operator = undefined;
      state.value.prevValue = undefined;
    }

    function calculateResult() {
      try {
        state.value.displayValue = eval(state.value.expression);
        state.value.prevValue = parseFloat(state.value.displayValue);
        state.value.expression = "";
      } catch (error) {
        state.value.displayValue = "Error";
        state.value.expression = "";
      }
    }

    return {
      state,
      appendToDisplay,
      appendToOperator,
      clear,
      calculateResult,
    };
  },
});
</script>

<style scoped>
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
  background-color: #9f9f1f;
}

.dot-btn {
  background-color: #eee;
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
