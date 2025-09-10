const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Helloooooooo'));

const books = [
  {
    id: 1,
    author: 'swap',
    price: 1050,
    gen: 'v1.10'
  }
];
// Read Operation
app.get('/getAllBooks', (req, res) => {
  res.status(200).send({ books });
});

app.get('/getBooksByID/:ID', (req, res) => {
  const ID = parseInt(req.params.ID); 
  const book = books.find((b) => b.id === ID);

  if (!book) {
    res.status(404).send({ msg: 'Book not found', success: false });
  } else {
    res.status(200).send({ book, success: true });
  }
});


// create operation
app.post('/createBook',(req, res)=>{
    newBook={
        id:Data.map(),
        title:req.body.title,
        author:req.body.author,
        price:eq.body.price,
        gen:eq.body.gen
    }
    books.push{newBook}
    resizeBy.status(200).sennd({msg:"Book added successfully"})
})

// Delete Operations
app.delete('/deleteBook/:ID',(req, res)=>{
    const ID= req.params.ID
    const index = books.findIndex((b)=>b.id ==ID)
    
    if(indx == -1){
        res.status(400).send({msg:"book not found", success:false})
    }else{
        books.splice(index, 1)
        res.status(200).send({msg:"books deleted successfully"})
    }
})


app.listen(port, () => console.log(`App running on port ${port}`));

// Test URLs:
// http://localhost:5000/
// http://localhost:5000/getAllBooks
// http://localhost:5000/getBooksByID/1
