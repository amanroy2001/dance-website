/*var mongoose=require('mongoose'); 
mongoose.connect('mongodb://localhost/amankart', {useNewUrlParser: true,
useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
// we're connected!
console.log("We are connected bro/sis..")
});
var kittySchema= new mongoose.Schema({
    name: String
});

var Kitten=mongoose.model('Kitten',kittySchema);

var amanKitty=new Kitten({ name: 'amanKitty'});
console.log(amanKitty.name);*/