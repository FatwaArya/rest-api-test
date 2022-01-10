
const express = require('express') //import express
const bodyParser = require('body-parser') //deklarasi body-parser
const app = express()              //deklarasi variabel express
const port = 8080                  //deklarasi port

app.use(bodyParser.urlencoded({ extended: false }))


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
    res.end('Menampilkan orang baru, atas nama: ' + namaOrang + ', yang beralamat di ' + alamat)//menggunakan res.end untuk mengakhiri respon dan menampilkan hasil
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

app.listen(port, () => {//app.listen untuk memulai server pada port 8080
    console.log(`Server di port ${port}`)
})

