const express = require("express")
const app = express()
let unicorns = require('./data.js')
const cors = require("cors")
app.use(cors())

app.use(express.static("public"))

app.get(`/unicorns`, (req, res) =>{
  let nameGivenByClient = req.query.name
  let vaccinatedGivenByClient = req.query.vaccinated
  let gtweightGivenByClient = Number(req.query.gtweight)
  let ltweightGivenByClient = Number(req.query.ltweight)
  let lovesGivenByClient = req.query.loves
  let genderGivenByClient = req.query.gender
  let hasVampsGivenByClient = req.query.hasvampires
  let gtvampsGivenByClient = Number(req.query.gtvampires)
  let result = unicorns

  if (nameGivenByClient) //filter by name
    result = result.filter((aUnicorn) => aUnicorn.name == nameGivenByClient)
  
  if (vaccinatedGivenByClient) //is vaccinated
      vaccinated = vaccinatedGivenByClient === 'true'
    result = result.filter((aUnicorn) => aUnicorn.vaccinated == vaccinated);


  if (gtweightGivenByClient) //weight greater than 
    result = result.filter((aUnicorn) => aUnicorn.weight > gtweightGivenByClient)

  if (ltweightGivenByClient) //weight less than 
    result = result.filter((aUnicorn) => aUnicorn.weight < ltweightGivenByClient)
  
  if (lovesGivenByClient)
  result = result.filter((aUnicorn) => aUnicorn.loves.includes(lovesGivenByClient));

  if (genderGivenByClient)
    result = result.filter((aUnicorn) => aUnicorn.gender === genderGivenByClient)
  
  if (hasVampsGivenByClient) //has vampires at all
    result = result.filter((aUnicorn) => aUnicorn.vampires > 0)

  if (gtvampsGivenByClient) //vampires greater than
    result = result.filter((aUnicorn) => aUnicorn.vampires >= gtvampsGivenByClient)

  res.json(result)
})


app.post(`/unicorns`, (req, res) =>{
  //push()
})


app.put(`/unicorns`, (req, res) =>{
  //map()
})


app.delete(`/unicorns`, (req, res) =>{
  //splice()
})


app.listen(3000, () => {
  console.log("Status:Active; All Systems Online;");
});