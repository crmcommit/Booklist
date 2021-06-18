import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';
// Import from relative path // js file don't need extesnion
import {data} from './books'
// for default export specific name is not required
import Book from'./Book'

import { useState } from 'react';

// Import from relative path
//import {greeting} from './testing/testing'

function BookList() {
  // state of the search
  const [searchTerm, setSearchTerm] = useState('');
  // must return jsx
  return (
      <React.Fragment>
        <div className="header">
          <h1>Best Sellers 2021</h1>
          <p>Booklist application built with React JS </p>
        </div>
         <input autoComplete="off"  type="text" name="search" placeholder="Search by title..."
          onChange={event =>{setSearchTerm(event.target.value)}}>
        </input>
        <section className="booklist">
          {/* filter the data set by the search of title */}
          {data.filter((val) => {
            if(searchTerm === "") {
              return val;  
            }
            // if search input includes the title
            else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
            }
          }).map((val,id) => { 
            return (
              // spread operator to spread the object
            <Book key={val.id} {...val}></Book>
            );
          })}
        </section>
      </React.Fragment>
  );
}







// Must have closing tag for injecting JS
ReactDom.render(<BookList />, document.getElementById('root'));