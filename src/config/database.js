const mongoose = require('mongoose');

main().then(res=> console.log("db connected successfully...!!!"))
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://gaurav:abc161966@cluster0.sfxiysz.mongodb.net/chat?retryWrites=true&w=majority');
}
