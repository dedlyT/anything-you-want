const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/bye", (req, res) => {
  res.send("barbeque baconc burger bbarbeuqe bacn burger")
})

app.get("/greeting", (req, res) => {
    res.send(`oijiojiiuhoiioppopopko[p ${req.query.name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})