import React from 'react'

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
     // console.log(title);
      }}>
      <a href={url} target="_blank" rel="noreferrer" > <img src={image}  alt={image} /></a>
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

// export as default . You can only have one default export per file.
export default Book;
