import mongoose from "mongoose"

mongoose.connect("mongodb://localhost/test",{
  useNewUrlParser: true,
  useUnifiedTopology: true
})