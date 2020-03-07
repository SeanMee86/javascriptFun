const getRecipe = (searchParam) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://api.edamam.com/search?q=${searchParam}&to=100&more=true&app_id=037c1e51&app_key=df1571ae26fdfeb1a98b0a243d2f0bdf`, true);

  xhr.onload = function() {
    if(this.status === 200){
      const response = JSON.parse(this.response);
      response.hits.forEach(hit => {
        console.log(hit.recipe)
      })
    }else{
      console.log(this.status);
    }
  }

  xhr.onerror = () => {
    console.log("Request Error")
  }

  xhr.send();
}

getRecipe('fish');