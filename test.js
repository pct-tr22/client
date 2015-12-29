
var Vsocheckout = require('vsocheckout');


var url = 'localhost:3000/vsostatus';
var agent = new Vsocheckout(url);


try {
    agent.get(236, function (err, result) {
        if (err) {
            console.error(err);
        }
        else {
            console.log(result);
        }
    });

}
catch (e) {
    console.log('got an error');
    //console.log(e);
}


