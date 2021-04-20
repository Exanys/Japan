const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri=process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {console.log('MongoDB database connected');});

const islandsRouter = require('./routing/islands');
const prefecturesRouter = require('./routing/prefectures');
app.use('/api/islands', islandsRouter);
app.use('/api/prefectures', prefecturesRouter);

app.listen(PORT, () => {console.log(`Server is listening on port: ${PORT}`)});