async function getPost(){
    try{ 
    let url = 'https://jsonplaceholder.typicode.com/posts';
    const response = await fetch(url);
    const posts = await response.json();
    
    let postSection = document.querySelector('.posts');
  
      for(let post of posts){
        let h2 = document.createElement('h2');
        h2.innerHTML = post.title;
        
        let p = document.createElement('p');
        p.innerhtml = post.body;
  
        let btn = document.createElement('button');
        btn.innerHTML = 'Like';
  
        let small = document.createElement('small');
        small.innerHTML = post.id;
        
        let article = document.createElement('article');
  
        article.appendChild(h2)
        article.appendChild(p)
        article.appendChild(btn)
        article.appendChild(small)
  
        postSection.appendChild(article)
      }
    }catch(error){
      alert("Não conseguimos carregar os posts");
    }
  }
  
  getPost()