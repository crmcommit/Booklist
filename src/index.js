import React, { Children } from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'
const books = [
   { 
  id :1,  
  image : "https://images-na.ssl-images-amazon.com/images/I/41TtVWrPcaS._SX348_BO1,204,203,200_.jpg",
  title : "Withyou",
  author: 'Akshay Kumar',
  url: "https://www.amazon.in/dp/9390791421/ref=sr_1_1?dchild=1&keywords=withyou&qid=1623952484&s=books&sr=1-1"
  },
  { 
  id:2,
  image : "https://m.media-amazon.com/images/P/0143332023.01._SCLZZZZZZZ_SX500_.jpg",
  title : "Grandma's Bag of Stories",
  author: 'Sudha Murty',
  url : "https://www.amazon.in/Grandmas-Bag-Stories-Sudha-Murty/dp/0143333623/ref=zg_bs_books_13?_encoding=UTF8&psc=1&refRID=EVT31VRKAX7WBNBJ67AJ"
  },
  { 
    id:3,
  image : "https://images-na.ssl-images-amazon.com/images/I/51eHb-R0PYL._SX381_BO1,204,203,200_.jpg",
  title : "Very First Sight Words Sentences Level",
  author: 'Ruskin Bond',
  url :"https://www.amazon.in/First-Sight-Words-Sentences-Level/dp/9387971996" 
  },
  { 
    id:4,
  image : "https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg",
  title : "The Alchemist",
  author: 'Paul Coelho', 
  url : "https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988/ref=zg_bs_books_10?_encoding=UTF8&psc=1&refRID=EVT31VRKAX7WBNBJ67AJ"
  },
  { 
    id:5,
  image : "https://m.media-amazon.com/images/P/0143332023.01._SCLZZZZZZZ_SX500_.jpg",
  title : "Grandma's Bag of Stories",
  author: 'Sudha Murty',
  url : "https://www.amazon.in/Grandmas-Bag-Stories-Sudha-Murty/dp/0143333623/ref=zg_bs_books_13?_encoding=UTF8&psc=1&refRID=EVT31VRKAX7WBNBJ67AJ"
  },
   { 
     id:6,
  image : "https://images-na.ssl-images-amazon.com/images/I/41TtVWrPcaS._SX348_BO1,204,203,200_.jpg",
  title : "Withyou",
  author: 'Akshay Kumar',
  url: "https://www.amazon.in/dp/9390791421/ref=sr_1_1?dchild=1&keywords=withyou&qid=1623952484&s=books&sr=1-1"
  },
  { 
    id:7,
  image : "https://images-na.ssl-images-amazon.com/images/I/41TtVWrPcaS._SX348_BO1,204,203,200_.jpg",
  title : "Withyou",
  author: 'Akshay Kumar'
  },
  { 
    id:8,
  image : "https://images-na.ssl-images-amazon.com/images/I/41TtVWrPcaS._SX348_BO1,204,203,200_.jpg",
  title : "Withyou",
  author: 'Akshay Kumar'
  },
  { 
    id:9,
  image : "https://images-na.ssl-images-amazon.com/images/I/41TtVWrPcaS._SX348_BO1,204,203,200_.jpg",
  title : "Withyou",
  author: 'Akshay Kumar'
  },
];


function BookList() {
  // must return jsx
  return (
    <div>
      <div className="header">
  <h1>Best Sellers 2021</h1>
  <p>Booklist application built with React JS </p>
</div>
     <Search/>
    <section className="booklist">
      {books.map((book) => { 
        return (
          // spread operator to spread the object
         <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
    </div>
  );
}

// always return value 
// Object destructuring 
const Book =(props) => {
  // attribute , eventhandler
  // onClick , onMouseOver
  // props destructing
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello world');
  }
  const morecomplexample = (author) => {
    console.log(author);
  }
   const {image, title ,author,url} = props;
  return (
    <div>
      {/* Mouse over */}
      <article className="book" onMouseOver={() => {
      console.log(title);
      }}>
      <a href={url} target="_blank"> <img src={image}  alt={image} /></a>
      <h1  onClick={ () => console.log(title)}>{title}</h1>
      <h4> {author}</h4>  
       <button type="button" onClick={clickHandler}>
         reference Example
       </button>
       {/* trigger only on click */}
       <button type='button' onClick={() => morecomplexample(author)}>
         More complex example
       </button>
      </article>
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