import React, { useState } from 'react';
import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrash
} from "@fortawesome/free-solid-svg-icons";
export default function Card({ todo, id, deleteTodo }) {
    const [checked, setChecked] = useState(false);

    function onClickCheckBox() {
        setChecked(!checked)

    }


    return (
        <div className={styles.card}>
            <div>
                <input type="checkbox" name="" id="check" onClick={onClickCheckBox} />
            </div>

            <h3>{todo}</h3>
            <div>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(id)} />
            </div>


        </div>
    )
}
