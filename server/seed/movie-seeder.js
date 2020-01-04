const mongoose = require('mongoose');
var Movie = require('../models/movie-model');
var Seanse = require('../models/seanse-model')
const db = require('../db');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var movies = [{
    _id:'5e0fc5715762c92f14d40448',
        name: 'Ad Astra',
        description: 'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.',
        releaseDate: '2019',
        orign: 'en',
        time: '2 godziny 2 min',
        imgSrc: 'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',

    },
    {
        _id:'5e0fc5715762c92f14d40447',
        name: 'Ad Astra',
        description: 'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.',
        releaseDate: '2019',
        orign: 'en',
        time: '2 godziny 2 min',
        imgSrc: 'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',

    },
    {
        _id:'5e0fc5715762c92f14d40446',
        name: 'Ad Astra',
        description: 'Astronauta Roy McBride wyrusza na wyprawę poza granice Układu Słonecznego, aby odnaleźć swego zaginionego ojca i odkryć tajemnicę, która zagraża przetrwaniu naszej planety. W czasie swej podróży odkryje sekrety, które postawią pod znakiem zapytania sens ludzkiej egzystencji i nasze miejsce we wszechświecie.',
        releaseDate: '2019',
        orign: 'en',
        time: '2 godziny 2 min',
        imgSrc: 'https://image.tmdb.org/t/p/w500/iIXuzH42MVDYRQfzwWFvpQdb7TB.jpg',

    }
];

var seaneses = [{
    hours:'17:00',
    day:'Monday',
    seats:[true, true],
    room:'A',
    movie:'5e0fc5715762c92f14d40448'
}];
seaneses.forEach(function (data) {
    console.log('seans added');
    let seanse = new Seanse(data);
    seanse.save();

});


movies.forEach(function (data) {
    console.log('movie added');
    let movie = new Movie(data)
    movie.save();
});


function exit() {
    mongose.disconnect();
}
