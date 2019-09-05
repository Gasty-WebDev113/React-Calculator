import React, { useState } from "react";
import { Container, NumbersContainer ,SignosContainer ,Signos ,Display, Operation, Result, Numbers, Ans, ResultButtomns} from "./styles";

export const CalcContainer = () => {
  const [firstdigit, setFirstDigit] = useState(""); //First Digit 
  const [seconddigit, setSecondDigit] = useState(""); //Second Digit
  const [active, setactive] = useState(true);
  const [epicresult, Magic] = useState(0);
  const [operator, setoperator] = useState("");
  const [sing, setsing] = useState("");
  const [percentage, setpersentage] = useState(false)

  //Yep I will refactorize this code in the future 

  const finalresult = (finalresult) =>{ //This change the state of result and finish the operation FUCK YEAH!!!

    finalresult.toString()


    if(isNaN(finalresult)){
           Magic("Error")
          }else if(finalresult.length > 10){
            Magic(finalresult.slice(0,5)) //I haven't know a better solution dammit :(   
          }else{
            Magic(finalresult)
          }
          console.log(finalresult)
  }

  const operacion = (digit) => {
    active ? setFirstDigit(firstdigit + digit) : setSecondDigit(seconddigit + digit); //This change to the other digit if an operation starts
  }

  const ans = (ans) => {
    if (epicresult !== 0) {
      active ? setFirstDigit(epicresult + ans) : setSecondDigit(epicresult);
    }
    //If active is true the last result will be the first digit or second
  }

  const operationstart = (operatornumber, signo) =>{
    setactive(false)
    setoperator(operatornumber);
    setsing(signo);
  }

  const restart = (restart) =>{
    setSecondDigit("");
    setFirstDigit("");
    setactive(true);
    setsing("");
    setpersentage(false);
    setoperator("");
  }
  const Zero = () => {
    restart()
    Magic("0");
  }
  
  const result = () => {
    let digit1 = +firstdigit;
    let digit2 = +seconddigit;
    const perdigit = (digit1/100) * digit2;
    const perdigitmultdiv = (digit2/100);
    
    switch (operator) {
      case 1:
        var sumafinalresult = 0;
        percentage ? sumafinalresult = digit1 + perdigit : sumafinalresult = digit1 + digit2;
        finalresult(sumafinalresult)
        setpersentage(false)
        break;

      case 2:
        var restafinalresult = 0
        percentage ? restafinalresult = digit1 - perdigit : restafinalresult = digit1 - digit2;
        finalresult(restafinalresult)
        setpersentage(false)
        break;

      case 3:
        var multfinalresult = digit1 * digit2;
        percentage ? multfinalresult = digit1 * perdigitmultdiv : restafinalresult = digit1 * digit2;
        finalresult(multfinalresult)
        setpersentage(false)   
        break;

      case 4:
        var divfinalresult = digit1 / digit2;
        percentage ? divfinalresult = digit1 / perdigitmultdiv : divfinalresult = digit1 / digit2;

        digit2 === 0 ? Magic("BOOM") : finalresult(divfinalresult);
          setpersentage(false)
        break;

      default:
        if (digit1 || digit2) {
          Magic(digit1);
        }
        break;
    }
    restart()
  }

  function percentagecondition(){
    
    let percent = (active === false) ? (percentage ? "%" : "") : ""
    return percent
  }

  return (
    <Container>
      <Display>
        <Operation>{`${firstdigit} ${sing} ${seconddigit} ${percentagecondition()}`}</Operation>
        <Result>{epicresult}</Result>
      </Display>
      <NumbersContainer>
        <Numbers onClick={() => Zero()}>C</Numbers>
        <Numbers onClick={() => previous()}>+/-</Numbers>
        <Numbers onClick={() => setpersentage(true)}>%</Numbers>
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
        <Signos onClick={() => operationstart(1, "+")}>+</Signos>
        <Signos onClick={() => operationstart(2, "-")}>-</Signos>
        <Signos onClick={() => operationstart(4, "/")}>/</Signos>
        <Signos onClick={() => operationstart(3, "*")}>x</Signos>
        <ResultButtomns onClick={() => result()}>=</ResultButtomns>
      </SignosContainer>
    </Container>
  );
};