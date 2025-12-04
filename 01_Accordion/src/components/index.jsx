import { use, useState } from "react";
import data from "./data";
import "./styles.css";


export default function Accordion() {
  
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);


  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }


  function handleMultiSelection(id) {

    let copyMultiple = [...multiple];
    const indexOfCurrentId = copyMultiple.indexOf(id);

    // console.log(indexOfCurrentId);
    // console.log(id);

    if(indexOfCurrentId === -1) {
      copyMultiple.push(id);
    }
    else {
      copyMultiple.splice(indexOfCurrentId, 1);
    }

    setMultiple(copyMultiple);
  }

  // console.log(multiple);


  return(
    <div className="wrapper">

      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className="multi-btn">
        { enableMultiSelection ? "Enable Single Selection" : "Enable Multi Selection" }
      </button>

      <div className="accordion">
        {
          data && data.length > 0 ?
            data.map(dataItem => 
              <div className="item" key={dataItem.id}>
                <div className="title" onClick={
                  enableMultiSelection
                  ? () => handleMultiSelection(dataItem.id)
                  : () => handleSingleSelection(dataItem.id)
                }>
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {
                  enableMultiSelection
                  ?
                    multiple.indexOf(dataItem.id) !== -1 && <div className="content"><hr/>{dataItem.answer}</div>
                  :
                    selected === dataItem.id && <div className="content"><hr/>{dataItem.answer}</div>
                }
              </div>
            )
            : <div>No data</div>
        }
      </div>
    </div>
  );
}