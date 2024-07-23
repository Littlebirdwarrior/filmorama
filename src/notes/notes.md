# Notes

## Requetes d'API

api à utiliser [FreeTestAPI](https://freetestapi.com/apis/movies)

### GET :hand:

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((json) => console.log(json)); 

### POST :fist:

    fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId : 1,
    })
    }).then(res=>res.json()).then(json => console.log(json))

#### Mettre en forme markdown

:P [comprendre les requetes http](https://www.youtube.com/watch?v=o5qsUz2vnzg&list=RDCMUC5HDIVwuqoIuKKw-WbQ4CvA&start_radio=1)

:pen: [mise en forme notes en markdown](https://www.markdownguide.org/basic-syntax/#code-blocks)