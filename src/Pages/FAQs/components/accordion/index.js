import React, { useState } from "react";
import styles from './styles.module.css';

function Accordion({ data }) {
  const [openItems, setOpenItems] = useState(new Array(data.length).fill(false));

  const handleClick = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <>
     {
        data.map((item, index) => (
          <div key={index} >
            <button 
              className={openItems[index] ? `${styles.accordion__button} ${styles.active1}` : styles.accordion__button} 
              onClick={() => handleClick(index)}
            >
              {item.title}
            </button>
            <div className={openItems[index] ? `${styles.panel} ${styles.active}` : styles.panel}>
              <p className={styles.para}>{item.content}</p>
            </div>
          </div>
        ))
     }
    </>
  );
}

export default Accordion;
