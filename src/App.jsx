import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import "./App.css";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import CalcProvider from "./context/CalcContext";
import Toggle from "./components/Toggle";

const btnValues = [
  ["C", "AC", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <Toggle />
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
          <Button 
          value= {btn}
          key={i}/>
        ))}</ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
