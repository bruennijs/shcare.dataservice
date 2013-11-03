/**
 * Created by bruentje on 03.11.13.
 */

var TripController = require('./controller/TripController')
  ,TripRepo = require('./dal/TripRepository')
  ,express = require('express');

var app = express();

var tripController = new TripController(app, TripRepo);

app.listen(4567);




