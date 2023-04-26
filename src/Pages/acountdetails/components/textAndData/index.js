

import React from 'react'
import styles from './styles.module.css';

export default function TextAndData({ data }) {
    return (
        <>
            <ul className={styles.list}>
                {
                    data.map((item, index) => (

                        <li key={index} className={styles.list__item}>
                            <p>{item.title}</p>
                            <div className={styles.list__item_info}>{item.content}</div>
                        </li>

                    )
                    )
                }
            </ul>
        </>
    )
}
