const express = require('express')
const _ = require('lodash')

const app = express()
const PORT = 8888;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('public'))

const sayings = [
  ["一期一会", "“Once In A Lifetime Opportunity”", "Ichigoichie"],
  ["一石二鳥", "“Killing two birds with one stone”", "Issekinicho"],
  ["初志貫徹", "“Achieving one’s original intention”", "Shoshikantetsu"],
  ["以心伝心", "“Without any need for words”", "Ishindenshin"],
  ["一所懸命", "“With utmost effort”", "Isshokenmei"],
  ["温故知新", "“Learning from the past”", "Onkochishin"],
  ["花鳥風月", "“The beauties of nature”", "Kachoufuugetsu"],
  ["臥薪嘗胆", "“Going through thick and thin to attain one’s objective”", "Ganshinshoutan"],
  ["質実剛健", "“Unaffected and sincere”"],
  ["十人十色", "“To each his own”"],
  ["晴耕雨読", "“Living in quiet retirement dividing time between work and intellectual pursuits”"],
  ["清浄潔白", "“Pure in heart and with a clean conscious”"],
  ["切磋琢磨", "“Cultivate one’s mind by studying hard”"],
  ["天真爛漫", "“Simple and innocent”"],
  ["日進月歩", "“Steady progress”"],
  ["不言実行", "“Actions before words”"],
  ["粉骨砕身", "“Work oneself to the bone”"],
  ["悠々自適", "“Living a life of leisure with dignity”"],
  ["臨機応変", "“Playing it by ear”"]
] 

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.get('/', (req, res) => {

  const data = {
    color: _.sample(colors),
    saying: _.sample(sayings),
    name: null
  }

  res.render('home', data )
})

app.get('/:name', (req, res) => {
  const name = req.params.name

  const data = {
    color: _.sample(colors),
    saying: _.sample(sayings),
    name: name
  }

  res.render('home', data ) 
})
