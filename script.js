const blockquote = document.querySelector('blockquote p');

function successFunction(response){
console.log(response)
blockquote.innerText = response.content
cite.innerText = `~ ${response.author}`
}

function errorFunction(error){
console.log(error, 'this is an error')
}
fetch(
     'https://api.quotable.io/random'
)

.then(function(resp){
return resp.json()
})

.then(successFunction)
.catch(errorFunction)