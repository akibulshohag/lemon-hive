import { log } from "console";
import React, { useState } from "react";


function ListItems() {
const items = [{name:'akib'}, {name:'rakib'}, {name:'abbas'}];

  const [list, setList] = useState(items);

  function shuffleList() {
    const shuffledList = [...list];
    

    for (let i = shuffledList.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));

      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }
    setList(shuffledList);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="">
        {list.map((item,index) => (
          <div key={index}>{item?.name}</div>
        ))}
      </div>
      <button onClick={shuffleList}>Shuffle List</button>
    </div>
  );
}

export default ListItems;
