const fs = require('fs');

fs.readFile('Atharv1.txt','utf8', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});