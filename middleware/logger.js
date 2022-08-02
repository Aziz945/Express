const res = require("express/lib/response");

let date =new Date();

let currentHour = date.getHours();


let currentDay = date.getDay();


function logger(req,res,next){
    if( currentHour> 9 && currentHour < 17 && currentDay > 1 && currentDay< 5){
        next()
    }else{
        res.send('<h1> Sorry we are closed! </h1>')
    }
}

module.exports = logger;