import React, { useState } from "react";
import {
  Container,
  NumbersContainer,
  SignosContainer,
  Signos,
  Display,
  Operation,
  Result,
  Numbers,
  Ans,
  ResultButtomns
} from "./styles";

export const CalcContainer = () => {
  const [firstdigit, setFirstDigit] = useState("");
  const [second, setsecond] = useState("");
  const [active, setactive] = useState(true);
  const [epicresult, Magic] = useState("");
  const [operator, setoperator] = useState("");
  const [sing, setsing] = useState("");

  function operacion(digit) {
    active ? setFirstDigit(firstdigit + digit) : seconddigit(digit);
    //Si esta activo, es decir el primer parametro sera el first digit
  }

  function ans(ans) {
    if (epicresult !== 0) {
      active ? setFirstDigit(epicresult + ans) : seconddigit(epicresult);
    }
    //Si esta activo, es decir el primer parametro sera el first digit
  }

  function seconddigit(digit) {
    setsecond(second + digit);
    console.log(second);
  }

  function result() {
    const digit1 = parseFloat(firstdigit);
    const digit2 = parseFloat(second);

    switch (operator) {
      case 1:
        const sumafinalresult = digit1 + digit2;

        isNaN(sumafinalresult)
          ? Magic("Error")
          : Magic(sumafinalresult.toFixed(2));
        console.log(sumafinalresult);
        break;

      case 2:
        const restafinalresult = digit1 - digit2;

        isNaN(restafinalresult)
          ? Magic("Error")
          : Magic(restafinalresult.toFixed(2));
        break;

      case 3:
        const multfinalresult = digit1 * digit2;

        isNaN(multfinalresult)
          ? Magic("Error")
          : Magic(multfinalresult.toFixed(2));
        break;

      case 4:
        const divfinalresult = digit1 / digit2;

        digit2 === 0
          ? Magic("BOOM")
          : isNaN(divfinalresult)
            ? Magic("Error")
            : Magic(divfinalresult.toFixed(2));
        break;

      default:
        if (digit1 || digit2) {
          Magic(digit1);
        }
        break;
    }
    setsecond("");
    setFirstDigit("");
    setactive(true);
    setsing("");
  }

  function suma() {
    active ? setactive(false) : console.log("no funciona 1");
    setoperator(1);
    setsing("+");
  }

  function resta() {
    active ? setactive(false) : console.log("no funciona 1");
    setoperator(2);
    setsing("-");
  }

  function multiplicacion() {
    active ? setactive(false) : console.log("no funciona 1");
    setoperator(3);
    setsing("*");
  }

  function division() {
    active ? setactive(false) : console.log("no funciona 1");
    setoperator(4);
    setsing("/");
  }
  function restart() {
    setactive(true);
    setFirstDigit("");
    setsecond("");
    Magic("");
    setoperator("");
    setsing("");
  }

  return (
    <Container>
      <Display>
        <Operation>{`${firstdigit} ${sing} ${second}`}</Operation>
        <Result>{epicresult}</Result>
      </Display>
      <NumbersContainer>
        <Numbers onClick={() => restart()}>C</Numbers>
        <Numbers onClick={() => operacion(2)}>+/-</Numbers>
        <Numbers onClick={() => operacion(3)}>%</Numbers>
        <Numbers onClick={() => operacion(1)}>1</Numbers>
        <Numbers onClick={() => operacion(2)}>2</Numbers>
        <Numbers onClick={() => operacion(3)}>3</Numbers>
        <Numbers onClick={() => operacion(4)}>4</Numbers>
        <Numbers onClick={() => operacion(5)}>5</Numbers>
        <Numbers onClick={() => operacion(6)}>6</Numbers>
        <Numbers onClick={() => operacion(7)}>7</Numbers>
        <Numbers onClick={() => operacion(8)}>8</Numbers>
        <Numbers onClick={() => operacion(9)}>9</Numbers>
        <Numbers onClick={() => operacion(0)}>0</Numbers>
        <Numbers onClick={() => operacion(".")}>.</Numbers>
        <Ans onClick={() => ans(firstdigit)}>Ans</Ans>
      </NumbersContainer>
      <SignosContainer>
        <Signos onClick={() => suma()}>+</Signos>
        <Signos onClick={() => resta()}>-</Signos>
        <Signos onClick={() => division()}>/</Signos>
        <Signos onClick={() => multiplicacion()}>x</Signos>
        <ResultButtomns onClick={() => result()}>=</ResultButtomns>
      </SignosContainer>
    </Container>
  );
};
