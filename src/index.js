import React, { Children } from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css';
// Import from relative path // js file don't need extesnion
import {data} from './books'
// for default export specific name is not required
import Book from'./Book'

// Import from relative path
import {greeting} from './testing/testing'

function BookList() {
  console.log(greeting);
  // must return jsx
  return (
    <div>
      <div className="header">
  <h1>Best Sellers 2021</h1>
  <p>Booklist application built with React JS </p>
</div>
     <Search/>
    <section className="booklist">
      {data.map((book) => { 
        return (
          // spread operator to spread the object
         <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
    </div>
  );
}



const Search = () => {
  return (
   <form action="">
       <input autoComplete="off"  type="text" name="search" placeholder="Search.."></input>
   </form>
  );
}



// Must have closing tag for injecting JS
ReactDom.render(<BookList />, document.getElementById('root'));