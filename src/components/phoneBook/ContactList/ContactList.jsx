import React from 'react';
import s from './ContactList.module.css';

function ContactList({ array, deleteContact }) {
  return (
    <ul className={s.list}>
      {array.map((el) => (
        <li className={s.item} key={el.id}>
          <span className={s.name}>
            {el.name}: {el.number}
          </span>
          <button className={s.btn} type="button" onClick={() => deleteContact(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
