import React from "react";
import data from "../data.json";

let nestedData = data;

const buildNestedData = (index) => {
  for (var i = 0; i < data[index].items.length; i++) {
    for (var c = 0; c < data.length; c++) {
      if (data[c].category === data[index].items[i]) {
        buildNestedData(c);
        nestedData[index].items[i] = data[c];
        nestedData.splice(c, 1);
      }
    }
  }
  return;
};

const handleData = () => {
  for (var i = 0; i < data.length; i++) {
    buildNestedData(i);
  }
};

const ListCategory = ({ item, layer }) => {
  let children = null;
  if (item.category && item.items.length) {
    children = (
      <ul className={`category__item category__item--${layer}`}>
        {item.items.map((i) => (
          <ListCategory item={i} layer={layer+1}/>
        ))}
      </ul>
    );
  }
  if (!item.category) {
    children = item
  }

  return (
    <li className={`category__item category__item--${layer}`} key={item.category}>
      {item.category}
      {children}
    </li>
  );
};

const renderData = () => {
  return (
    <ul>
      {nestedData.map((c) => (
        <ListCategory item={c} layer={1} />
      ))}
    </ul>
  );
};

const Category = () => {
  return (
    <div className='category__wrapper'>
      {handleData()}
      {renderData()}
    </div>
  );
};

export default Category;
