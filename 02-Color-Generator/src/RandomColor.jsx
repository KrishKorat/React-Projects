import { use, useEffect, useState } from "react"


export default function RandomColor() {

  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');


  function utilityRandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {

    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    let hexColor = "#";

    for(let i=0; i<6; i++) {
      hexColor += hex[utilityRandomColor(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRandomRgbColor() {
    const r = utilityRandomColor(256);
    const g = utilityRandomColor(256);
    const b = utilityRandomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }


  useEffect(() => {
    if(typeOfColor === 'rgb') {
      handleRandomRgbColor();
    } else {
      handleRandomHexColor();
    }
  }, [typeOfColor]);

  return(
    <div 
      style={{
        width: "100vw",
        height: "100vh",
        background: color
      }}
    >
      <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>

      <button onClick={ typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}>Generate Random Color</button>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '20px',
          color: '#fff',
          marginTop: '60px',
          fontSize: '60px'
        }}
      >
        <h3>{typeOfColor === 'rgb' ? "RGB color" : "HEX color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>  
  )
}