var url = 'https://gist.githubusercontent.com/andteki/f746e42e56b7545390399ee06d68eabe/raw/c5ec4e9921c8c053adf4263b2f2fc3811a86b2c5/todos.json';
var url2 = 'https://gorest.co.in/public/v1/users';
fetch(url2)
.then(res => res.json())
.then(data => {
    console.log(data);
});