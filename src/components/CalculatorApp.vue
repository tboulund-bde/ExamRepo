<template>
  <div class="box">
    <h1 class="title_h">Amazing Calculator 2023</h1>
    <p class="title_p">Free version</p>
  </div>
  <div class="boxnumerouno">
    <div class="calculator">
      <div class="calculator-display">
        {{ state.displayValue }}
      </div>
      <div class="calculator-buttons">
        <button class="btnC" @click="clear">C</button>
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
    <div class="discription">
      <h1 class="heading">Calculate your dreams!</h1>
      <p class="text">
        This is a simple calculator app built with Vue 3 and TypeScript. It
        supports the basic operations of addition, subtraction, multiplication,
        and division.
      </p>
      <p class="text2">
        Do you want to upgrade to remove ads and have more functionality?
      </p>
      <a class="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Click here!</a
      >
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
.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #4169e1;
  padding-top: 20px;
}

.title_h {
  color: #d3d3d3;
  font-size: 40px;
  padding-right: 10px;
}
.title_p {
  color: #d3d3d3;
  font-size: 17px;
}
.boxnumerouno {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #4169e1;
  height: 100vh;
}
.calculator {
  display: inline-block;
  width: 200px;
  border: 3px solid #d3d3d3;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 75px;
  width: 25%;
}

.discription {
  display: inline-block;
  width: 200px;
  border: 3px solid #d3d3d3;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 75px;
  width: 25%;
  padding: 20px;
}

.calculator-display {
  text-align: right;
  padding: 10px;
  border-bottom: 3px solid #d3d3d3;
  border-radius: 5px 5px 0 0;
  background-color: #4169e1;
  font-size: 20px;
  font-weight: bold;
}

.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #d3d3d3;
}

.calculator-buttons button:hover {
  background-color: #e3e3e3;
  cursor: pointer;
}

.operation-btn {
  background-color: #d3d3d3;
}

.dot-btn {
  background-color: #d3d3d3;
}

button {
  padding: 10px;
  border: none;
  background-color: #d3d3d3;
  cursor: pointer;
}

button:hover {
  background-color: #d3d3d3;
}

.discription {
  padding: 20px;
  background-color: #d3d3d3;
}

.heading {
  font-size: 30px;
  font-weight: bold;
  color: #4169e1;
}

.text {
  font-size: 17px;
}
.text2 {
  font-size: 17px;
  font-weight: bold;
  padding-top: 15px;
}

.link {
  font-size: 17px;
  font-weight: bold;
  padding-top: 15px;
  color: #4169e1;
  text-align: center;
}

.link:hover {
  color: #992255;
}

.btnC {
  background-color: orange;
  color: white;
  border-radius: 5px;
}

.btnC:hover {
  background-color: white;
  color: orange;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  transition: all 0.3s ease;
}

.operation-btn {
  background-color: #992255;
  color: white;
  border-radius: 5px;
  margin: 2px;
}

.operation-btn:hover {
  background-color: white;
  color: #992255;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  transition: all 0.3s ease;
}

.dot-btn {
  background-color: #992255;
  color: white;
  border-radius: 5px;
  margin: 2px;
}

.dot-btn:hover {
  background-color: white;
  color: #992255;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  transition: all 0.3s ease;
}

button {
  background-color: #4169e1;
  color: white;
  border-radius: 5px;
  margin: 2px;
}

button:hover {
  background-color: white;
  color: #4169e1;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .box {
    flex-direction: column;
    padding: 20px;
  }

  .title_h {
    font-size: 30px;
    padding-right: 0;
  }

  .title_p {
    font-size: 14px;
  }

  .calculator {
    width: 80%;
    margin: 20px;
  }

  .discription {
    width: 80%;
    margin: 20px;
  }
}
</style>
