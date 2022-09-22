import React from 'react';
import s from './Filter.module.css';

function Filter({ value, changeFilter }) {
  return (
    <>
      <div className={s.filter}>
        <label className={s.label}>
          Find contact by name
          <input
            className={s.input}
            type="text"
            name="filter"
            value={value}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e) => changeFilter(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}

export default Filter;
