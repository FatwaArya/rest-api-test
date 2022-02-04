
const express = require('express') //import express
const bodyParser = require('body-parser') //deklarasi body-parser
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port
const { title } =

    app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {       // endpoint '/'
    res.send("Hello Programers!")
})

app.get('/orang/:nama', (req, res) => { //endpoint get untuk mendapatakan nama
    var namaOrang = req.params.nama //merequest nama pada endpoint untuk ditampilkan
    res.end('Menampilkan nama siswa:' + namaOrang)//menggunakan res.end untuk mengakhiri respon dan menampilkan hasil
})

app.post('/orang', (req, res) => {//endpoint post untuk membuat orang
    var namaOrang = req.body.nama//merequest nama menggunakan body pada endpoint untuk ditampilkan
    var alamat = req.body.alamat//merequest alamat menggunakan body pada endpoint untuk ditampilkan yang key sudah di deklrasikan di postman
    res.end('Menampilkan orang baru, atas nama: ' + namaOrang + ', yang beralamat di ' + alamat)//menggunakan res.end untuk mengakhiri respons dan menampilkan hasil
})

app.delete('/orang/:id', (req, res) => { //endpoint delete untuk menghapus orang dengan menggunakan id 
    var id = req.params.id // merequest id menggunakan params pada endpoint untuk ditampilkan
    var namaOrang = req.body.nama// merequest nama menggunakan body pada endpoint untuk ditampilkan
    res.end('ID' + id + ' telah dihapus, atas nama ' + namaOrang)//menggunakan res.end untuk mengakhiri respon dan menampilkan hasil
});

app.put('/orang/:id', (req, res) => {//endpoint put untuk update orang menggunakan id
    var id = req.params.id// merequest id menggunakan params pada endpoint untuk ditampilkan
    var namaOrang = req.body.nama// merequest nama menggunakan body pada endpoint untuk ditampilkan
    var alamat = req.body.alamat// merequest alamat menggunakan body pada endpoint untuk ditampilkan
    res.end('Seseorang dengan ID' + id + ', telah terupdate')//menggunakan res.end untuk mengakhiri respon dan menampilkan hasil
});

// data dummy
let nextId = 4;
const books = [{
    id: 1,
    title: "The First",
    year: 2019
},
{
    id: 2,
    title: "The Second",
    year: 2020
},
{
    id: 3,
    title: "The Third",
    year: 2021
},
];
app.get("/books", (req, res) => {
    res.send({
        message: "Berhasil menampilkan data buku",
        data: {
            books
        }
    })
})

app.post("/books", (req, res) => {
    const book = {
        id: nextId++,
        title: req.body.title,
        year: req.body.year,
    }
    books.push(book);
    res.send({
        message: "Berhasil menambahkan buku",
        data: {
            newBook: book,
            totalBooks: books.length,
        }
    })
})

//update data
app.put("/books/:id", (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id == id);
    if (!book) {
        res.status(404).send({
            message: "Buku tidak ditemukan"
        })
    } else {
        book.title = req.body.title;
        book.year = req.body.year;
        res.send({
            message: "Berhasil mengubah buku",
            data: {
                book,
                totalBooks: books.length,
            }
        })
    }
})

//delete data
app.delete("/books/:id", (req, res) => {
    const id = req.params.id;
    const book = books.find(book => book.id == id);
    if (!book) {
        res.status(404).send({
            message: "Buku tidak ditemukan"
        })
    } else {
        const index = books.indexOf(book);
        books.splice(index, 1);
        res.send({
            message: "Berhasil menghapus buku",
            data: {
                book,
                totalBooks: books.length,
            }
        })
    }
})


app.listen(port, () => {//app.listen untuk memulai server pada port 8080
    console.log(`Server di port ${port}`)
})

