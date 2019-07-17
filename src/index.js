import "./styles/main.scss"


let promies = fetch("https://jsonplaceholder.typicode.com/posts/1")

// promies.then(a => a.json()).then(a=> console.log(a))


const posts = [
    { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
    { title: 'CSS!', author: 'Chris Coyier', id: 2 },
    { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  ];

  const authors = [
    { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
    { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
    { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  ];




    function getPostById(n) {
        return new Promise((resolve, reject) => {
            const post = posts.find(p=> p.id === n);
            if (post ) {
                resolve(post)
            } else { 
                reject("brak postu")}
        })
    }

function h(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const q = authors.find(author=> author.name === post.author )
        if (q) {
                resolve(q)
        }
    
        else {
            reject(Error("no"))
        }
    }, 300 )
    })
}


    getPostById(3)
        .then(a => { 
          return  h(a)})
         .then(a => console.log(a))
        .catch(a => console.log(a))
  