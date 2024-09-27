const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name :{
        type :String,
        require:true
    },
    email : {
        type :String,
        require:true,
    },
    message : {
        type : String,
        require:true,
    }
})

// models

const message = new mongoose.model("Contact Message", messageSchema);

// const documentcreation = async () => {
//     try {
//         const kartik = new User({
//             name: "user5",
//             branch: "Cs",
//             year: 3,
//             isPassed: true,
//         })
       
//         const result = await kartik.save();
//         console.log("data save succesfully");
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// documentcreation();

module.exports = message ;