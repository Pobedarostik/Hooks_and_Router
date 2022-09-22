// import { useState } from 'react';
import { Route } from 'react-router-dom';
// import shortid from 'shortid';
import './App.css';
// import { ContactForm, Filter, ContactList } from './components/phoneBook';
// import useLocalStorage from './hooks/useLocalStorage';

// import { Searchbar, ImageGallery } from './components/searchPhoto';

// import Home from './pages/Home';
// import About from './pages/About';

import PhoneBook from './components/phoneBook/PhoneBook';
import FeedBack from './components/feedBack/FeedBack';
import SearchPhoto from './components/searchPhoto/SearchPhoto';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      {/* <Route path="/phone" component={PhoneBook} />
      <Route path="/feed" component={FeedBack} /> */}
      <Route path="/feed">
        <FeedBack />
      </Route>

      <Route path="/phone">
        <PhoneBook />
      </Route>

      <Route path="/search">
        <SearchPhoto />
      </Route>
    </>
  );
}

export default App;

//-------- до компонента SearchPhoto-------------------------------------
// const [queryValue, setqueryValue] = useState('');

// const handleSubmit = (data) => {
//   setqueryValue(data);
// };
//-------------------//////-----------FeedBack---------------------------------------//
// const [good, setGood] = useState(0);
// const [neutral, setNeutral] = useState(0);
// const [bad, setBad] = useState(0);

// const onLeaveFeedback = (e) => {
//   const name = e.target.name;
//   switch (name) {
//     case 'Good':
//       setGood((prev) => prev + 1);
//       break;
//     case 'Neutral':
//       setNeutral((prev) => prev + 1);
//       break;
//     case 'Bad':
//       setBad((prev) => prev + 1);
//       break;
//     default:
//       return;
//   }
// };
// const countTotalFeedback = () => {
//   const result = good + neutral + bad;
//   return result;
// };

// const countPositiveFeedbackPercentage = () => {
//   const result = countTotalFeedback();
//   const percentage = (good * 100) / result;
//   return Math.round(percentage);
// };

// const options = ['Good', 'Neutral', 'Bad'];
// const total = countTotalFeedback();
//-------------------//////-----------FeedBack---------------------------------------//

//-------------------//////--------------PhoneBook------------------------------------//
// const [contacts, setContacts] = useLocalStorage('array', []);
// const [filter, setFilter] = useState('');

// const addContacts = ({ name, number }) => {
//   const sameName = contacts.map((el) => el.name).includes(name);
//   if (!sameName) {
//     setContacts([{ id: shortid(), name, number }, ...contacts]);
//   } else {
//     alert(`${name} is already in contacts!`);
//   }
// };

// const changeFilter = (data) => {
//   setFilter(data);
// };

// const filteredArrey = () => {
//   // const normalizeFilter = filter.toLowerCase();
//   return contacts
//     .filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
//     .sort((a, b) => a.name.localeCompare(b.name));
// };

// const deleteContact = (id) => {
//   setContacts((prev) => prev.filter((el) => el.id !== id));
// };
//-------------------//////--------------PhoneBook------------------------------------//

<>
  {/* до компонента PhoneBook */}

  {/* <div className="PhoneBook">
        <h2>Phonebook</h2>
        <ContactForm toSetContacts={addContacts} />
        <Filter value={filter} changeFilter={changeFilter} />

        <h2>Contacts</h2>

        {contacts.length === 0 ? (
          <span className="span">Add contacts!</span>
        ) : (
          <ContactList array={filteredArrey()} deleteContact={deleteContact} />
        )}
      </div> */}

  {/* до компонента PhoneBook */}

  {/* до компонента SearchPhoto */}
  {/* <div className="App">
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery queryValue={queryValue} />
      </div> */}
  {/* до компонента SearchPhoto */}

  {/* до компонента Feedback */}
  {/* <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        </Section>

        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </> */}
  {/* до компонента Feedback */}
</>;
