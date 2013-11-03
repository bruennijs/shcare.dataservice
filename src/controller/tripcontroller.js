/**
 * Created by bruentje on 31.10.13.
 */

var Q = require('q');

var TripController;
TripController = function TripController(app, repository) {
  this.repository = repository;
  this.trips = [];
  app.post("/trips", this.addTrip);
  app.get("/trips", this.getTrips);
  app.use("/trips/?to=:zip", this.getTripsByZip);
};

TripController.prototype.getTrips = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(this.trips);
};

TripController.prototype.getTripsByZip = function (req, res) {

};

TripController.prototype.addTrip = function (req, res) {
  try {
    var obj = JSON.parse(req.body);
    this.trips.push(obj);
  } catch (e) {
    res.send(e);
  }
}


module.exports = TripController;
