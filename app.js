var quote = document.querySelector('.quote-input')
var quote_author = document.querySelector('.author-input')
var button = document.querySelector('.btn')
var quote_show = document.querySelector('.quote-show')
var author_show = document.querySelector('.author-show')
var generate = document.querySelector('.generate')

var quoteArray = []

function mainProgram() {
  if (quote.value == '' && quote_author.value == '') {
    alert('Please type quote and author\'s name')
  }
  else if (quote.value == '') {
    alert('Please type the quote')
  }
  else if (quote_author.value == '') {
    alert('Please type the author\'s name')
  }
  else {
    quoteArray.push({quote: quote.value, author: quote_author.value})
    quote.value = ''
    quote_author.value = ''
  }
}

function randomProgram() {
  if (quoteArray.length < 1) {
    alert('There is no item in the storage. Please store quotes and their author\'s name in the system.')
  }
  else if (quoteArray.length < 5 && quoteArray.length >= 1) {
    alert('Please store at least 5 quotes. You\'ve stored ' + quoteArray.length + ' quote(s)')
  }
  else {
    var ran_num = Math.floor(Math.random() * quoteArray.length)
    quote_show.innerHTML = quoteArray[ran_num].quote 
    author_show.innerHTML = quoteArray[ran_num].author
  }
}

button.addEventListener('click', () => {
    mainProgram()
})

generate.addEventListener('click', () => {
  randomProgram()
})