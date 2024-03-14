const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//const base_url = "http://localhost:3000";
// const base_url = "http://10.104.7.149";
const base_url = "http://node59384-noderest1.proen.app.ruk-com.cloud:11552";

app.set('views', path.join(__dirname, "/public/views"));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

// ดูทั้งหมด 11111111111
app.get('/product', async (req, res) => {
    try {
        const response = await axios.get(base_url + '/product');
        res.render("product/books", { product: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// ดูแต่ละอัน
app.get('/product/:id', async (req, res) => {
    try {
        const response = await axios.get(base_url + '/product/' + req.params.id);
        res.render("product/book", { product: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// แสดงหน้าสร้างสินค้า
app.get('/produc/create', (req, res) => {
    res.render("product/create");
});

app.post('/produc/create', async (req, res) => {
    try {
        const data = { product_name: req.body.product_name, quantity_available: req.body.quantity_available, price: req.body.price };
        await axios.post(base_url + '/product', data);
        res.redirect('/product');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error1');
    }
});

// อัพเดท
app.get('/product/update/:id', async (req, res) => {
    try {
        const response = await axios.get(base_url + '/product/' + req.params.id);
        res.render('product/update', { product: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post('/product/update/:id', async (req, res) => {
    try {
        const data = { product_name: req.body.product_name, quantity_available: req.body.quantity_available, price: req.body.price };
        await axios.put(base_url + '/product/' + req.params.id, data);
        res.redirect('/product');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// ลบ
app.get('/product/delete/:id', async (req, res) => {
    try {
        await axios.delete(base_url + '/product/' + req.params.id);
        res.redirect('/product');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// 222222222222222

// ดูทั้งหมด
app.get('/User', async (req, res) => {
    try {
        const response = await axios.get(base_url + '/User');
        res.render("User/bookss", { User: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// ดูแต่ละอัน
app.get('/User/:id', async (req, res) => {
    try {
        const response = await axios.get(base_url + '/User/' + req.params.id);
        res.render("User/bookk", { User: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// show create desktop
app.get('/Use/create', (req, res) => {
    res.render("User/create");
});

app.post('/Use/create', async (req, res) => {
    try {
        const data = { username: req.body.username, email: req.body.email, phone: req.body.phone };
        await axios.post(base_url + '/User', data);
        res.redirect('/User');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});


// update
app.get('/User/update/:id', async (req, res) => {
    try {
        const response = await axios.get(base_url + '/User/' + req.params.id);
        res.render('User/update', { User: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error1');
    }
});

app.post('/User/update/:id', async (req, res) => {
    try {
        const data = { username: req.body.username, email: req.body.email, phone: req.body.phone };
        await axios.put(base_url + '/User/' + req.params.id, data);
        res.redirect('/User');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// delete
app.get('/Use/delete/:id', async (req, res) => {
    try {
        await axios.delete(base_url + '/User/' + req.params.id);
        res.redirect('/User');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});




// 333333333333333

// ดูทั้งหมด
app.get('/order_detail', async (req, res) => {
    try {
        const user = await axios.get(base_url + '/User');
        const product = await axios.get(base_url + '/product');
        const response = await axios.get(base_url + '/order_detail');
        res.render("order_detail/bookssss", { order_detail: response.data , user: user.data, product: product.data});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// ดูแต่ละอัน
app.get('/order_detail/:id', async (req, res) => {
    try {
        const response = await axios.get(base_url + '/order_detail/' + req.params.id);
        res.render("order_detail/bookkkk", { order_detail: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// แสดงหน้าสร้างสินค้า
app.get('/order_detai/create', (req, res) => {
    res.render("order_detail/create");
});

app.post('/order_detai/create', async (req, res) => {
    try {
        const data = { Order_ID: req.body.Order_ID, user_ID: req.body.user_ID, product_ID: req.body.product_ID };
        await axios.post(base_url + '/order_detail', data);
        res.redirect('/order_detail');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// อัพเดท
app.get('/order_detai/update/:id', async (req, res) => {
    try {
        const response = await axios.get(base_url + '/order_detail/' + req.params.id);
        res.render('order_detail/update', { order_detail: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.post('/order_detai/update/:id', async (req, res) => {
    try {
        const data = { Order_ID: req.body.Order_ID, user_ID: req.body.user_ID, product_ID: req.body.product_ID };
        await axios.put(base_url + '/order_detail/' + req.params.id, data);
        res.redirect('/order_detail');
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// ลบ
app.get('/order_detai/delete/:id', async (req, res) => {
    try {
        await axios.delete(base_url + '/order_detail/' + req.params.id);
        res.redirect('/order_detail');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

// 4444444444444444

// ดูทั้งหมด
app.get('/order', async (req, res) => {
   try {
         const user = await axios.get(base_url + '/User');
        const product = await axios.get(base_url + '/product');
    
       const response = await axios.get(base_url + '/order');
       res.render("order/booksss", { order: response.data , user: user.data, product: product.data});
   } catch (err) {
       console.error(err);
       res.status(500).send('Error');
   }
});

// ดูแต่ละอัน
app.get('/order/:id', async (req, res) => {
   try {
       const response = await axios.get(base_url + '/order/' + req.params.id);
       res.render("order/bookkk", { order: response.data });
   } catch (err) {
       console.error(err);
       res.status(500).send('Error');
   }
});

// แสดงหน้าสร้างสินค้า
app.get('/orde/create', (req, res) => {
   res.render("order/create");
});

app.post('/orde/create', async (req, res) => {
   try {
       const data = {  Order_dID: req.body.Order_dID };
       await axios.post(base_url + '/order', data);
       res.redirect('/order');
   } catch (err) {
       console.error(err);
       res.status(500).send('Error1');
   }
});

// อัพเดท
app.get('/order/update/:id', async (req, res) => {
   try {
       const response = await axios.get(base_url + '/order/' + req.params.id);
       res.render('order/update', { product: response.data });
   } catch (err) {
       console.error(err);
       res.status(500).send('Error');
   }
});

app.post('/order/update/:id', async (req, res) => {
   try {
       const data = { Order_dID: req.body.Order_dID};
       await axios.put(base_url + '/order/' + req.params.id, data);
       res.redirect('/order');
   } catch (err) {
       console.error(err);
       res.status(500).send('Error');
   }
});

// ลบ
app.get('/orde/delete/:id', async (req, res) => {
   try {
       await axios.delete(base_url + '/order/' + req.params.id);
       res.redirect('/order');
   } catch (err) {
       console.error(err);
       res.status(500).send('Error');
   }
});


app.listen(5500, () => console.log(`Listening on port 5500`));
