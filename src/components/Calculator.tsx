import { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState<string>('0');

  const handleButtonClick = (label: string) => {
    setInput(prevInput => {
      if (label === 'C') {
        return '0';
      } else if (label === 'CE') {
        return prevInput.length > 1 ? prevInput.slice(0, -1) : '0';
      } else if (label === '+/-') {
        return prevInput.startsWith('-')
          ? prevInput.slice(1)
          : '-' + prevInput;
      } else if (label === '%') {
        try {
          return (parseFloat(prevInput) / 100).toString();
        } catch {
          return 'Error';
        }
      } else if (label === ',') {
        return prevInput.includes('.') ? prevInput : prevInput + '.';
      } else if (label === '=') {
        try {
          return new Function('return ' + prevInput)().toString();
        } catch {
          return 'Error';
        }
      } else {
        if (prevInput === '0' && !['+', '-', '*', '/'].includes(label)) {
          return label;
        }
        return prevInput + label;
      }
    });
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="button-grid">
        <Button label="%" onClick={() => handleButtonClick('%')} />
        <Button label="CE" onClick={() => handleButtonClick('CE')} />
        <Button label="C" onClick={() => handleButtonClick('C')} />
        <Button label="←" onClick={() => handleButtonClick('CE')} />
        <Button label="7" onClick={() => handleButtonClick('7')} />
        <Button label="8" onClick={() => handleButtonClick('8')} />
        <Button label="9" onClick={() => handleButtonClick('9')} />
        <Button label="*" onClick={() => handleButtonClick('*')} />
        <Button label="4" onClick={() => handleButtonClick('4')} />
        <Button label="5" onClick={() => handleButtonClick('5')} />
        <Button label="6" onClick={() => handleButtonClick('6')} />
        <Button label="-" onClick={() => handleButtonClick('-')} />
        <Button label="1" onClick={() => handleButtonClick('1')} />
        <Button label="2" onClick={() => handleButtonClick('2')} />
        <Button label="3" onClick={() => handleButtonClick('3')} />
        <Button label="+" onClick={() => handleButtonClick('+')} />
        <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
        <Button label="0" onClick={() => handleButtonClick('0')} />
        <Button label="," onClick={() => handleButtonClick(',')} />
        <Button label="=" onClick={() => handleButtonClick('=')} />
      </div>
    </div>
  );
};

export default Calculator;
