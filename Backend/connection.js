const mongoose= require ('mongoose');
const url ='mongodb+srv://vaibhav786:vaibhav786@cluster0.ivrnu.mongodb.net/Mydb?retryWrites=true&w=majority'

mongoose.connect(url,{ useNewUrlParser :true,useUnifiedTopology :true })

.then(() => {

    console.log('Connection established');

})

.catch((err) =>{
    console.error(err);
})

module.exports=mongoose