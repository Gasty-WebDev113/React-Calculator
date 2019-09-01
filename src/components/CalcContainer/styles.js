import styled from "styled-components";

export const Container = styled.div`
  height: 75vh;
  width: 30vw;
  background: #323232;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 50%;
  font-size: 30px;
  box-shadow: 0px 0px 15px 5px rgba(97, 97, 97, 1);

  @media (max-width: 450px) {
    width: 75%;
  }

  @media (min-width: 760px) and (max-width: 1100px) {
    width: 50%;
  }
`;
export const NumbersContainer = styled.div`
  height: 75%;
  width: 75%;
  background: none;
  bottom: 0px;
  position: absolute;
`;

export const Numbers = styled.div`
  display: inline-block;
  height: 20%;
  width: 33%;
  background: #3d3d3d;
  position: relative;
  line-height: 10vh;
  color: white;
  z-index: 999;
`;

export const Ans = styled(Numbers)`
  background: #f9a923;
`;

export const SignosContainer = styled.div`
  display: inline-block;
  height: 75%;
  width: 25%;
  background: none;
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
//Medidas numeros: 15%

export const Signos = styled.div`
  line-height: 10vh;
  height: 20%;
  width: 100%;
  background: #3d3d3d;
  margin: 0;
  color: #f9a923;
`;
export const ResultButtomns = styled(Signos)`
  background: #f9a923;
  color: white;
`;

export const Display = styled.div`
  height: 25%;
  width: 100%;
  background: #c1c1c1;
  margin: 0;
  text-align: right;
`;
export const Operation = styled.span`
  top: 10%;
  margin-right: 5%;
  text-align: right;
  position: relative;
  font-weight: lighter;
  color: #4b4b4b;

  @media (max-width: 450px) and (max-width: 760px) {
    font-size: 25px;
  }
`;
export const Result = styled.span`
  font-size: 50px;
  top: 10%;
  right: 10%;
  text-align: right;
  position: absolute;

  @media (max-width: 450px) and (max-width: 760px) {
    font-size: 30px;
    top: 13%;
  }
`;
