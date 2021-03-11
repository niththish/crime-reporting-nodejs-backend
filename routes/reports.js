express = require('express');
reportsRouter = express.Router();

http = require('http');
const bodyParser = require('body-parser');
reportsRouter.use(bodyParser.json());

const reports=require('../models/reports');


reportsRouter.route('/')
.get( (req,res,next) => {
    reports.find({})
    .then((report) => {
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(report);
    }, (err) => next(err) )
    .catch( (err) => next(err) );
})
.post((req,res,next)=>{
    reports.create(req.body)
    .then((report)=>{
      res.statusCode=200;
      res.setHeader('content-Type','application/json');
      res.json("inserted your given information");
    },(err)=>next(err))
    .catch((err)=>next(err));
  })

module.exports = reportsRouter;
