'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var faker = require('faker');

var app = module.exports = loopback();
boot(app, __dirname, function(err) {
  if (err) throw err;
  var ds = app.dataSources.bpmsdb;
  var data = []
  for(var i=1;i <= 1000; i++){
    data.push({
      customerid:i,
      customername: faker.company.companyName(),
      customertier: Math.floor(Math.random() * 5) + 1,
      approvalthreshold: (Math.floor(Math.random() * 10) + 1)*10000
    })
  }
  app.models.BtsCustomer.create(data,function(err){
    if(err){
      console.log(err);
    } else {
      console.log("done");
    }
  })
});
