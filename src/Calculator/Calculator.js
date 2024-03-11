import "./Calculator.css";

function Nums() {
  return (
    <div className="numbers">
      <div className="group1">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div className="group2">
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div className="group3">
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <div className="group4">
        <button>.</button>
        <button>0</button>
        <button>=</button>
      </div>
    </div>
  );
}

function Functionality() {
  return (
    <div className="_func">
      <div className="groupA">
        <button className="sum">+</button>
        <button className="neg">-</button>
        <button className="devi">/</button>
        <button className="multi">*</button>
      </div>
      <div className="groupB">
        <button>(</button>
        <button>)</button>
        <button>C</button>
        <button>X</button>
      </div>
    </div>
  );
}

function Num() {
  return (
    <h2 className="start" id="_start">
      0
    </h2>
  );
}

function Calculator() {
  return (
    <div className="main">
      <div className="flexBox">
        <div className="buffer">
          <Num />
        </div>
        <Nums />
        <Functionality />
      </div>
    </div>
  );
}

export default Calculator;
