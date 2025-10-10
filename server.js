const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Service = require('./serviceModel');

const app = express();
app.use(cors());
app.use(express.json());


mongoose
  .connect('mongodb://localhost:27017/Employeemanager')
  .then(() => console.log('✅ Database connected'))
  .catch((err) => console.log('❌ DB Error: ' + err));


app.post('/add', async (req, res) => {
  try {
    const data = new Service(req.body);
    await data.save();
    res.send('Service added!');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get('/list', async (req, res) => {
  try {
    const data = await Service.find();
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.put('/update/:id', async (req, res) => {
  try {
    await Service.findByIdAndUpdate(req.params.id, req.body);
    res.send('Service updated!');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.delete('/delete/:id', async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.send('Service deleted!');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.use(express.static('public'));
app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));
