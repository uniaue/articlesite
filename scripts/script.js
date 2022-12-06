const base_url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1"



const getAllNews = async () => {
    try {
        const response = await fetch(`${base_url}/news`);
        const data = await response.json();
        console.log(data)
        displayNews(data)
    }catch(error){
        console.log(error)
    }
};
const displayNews = (data) =>{
    data.map((item)=>{
        var articleContainer = document.getElementById("articleContainer");

        var article = document.createElement('div');
        var article_image = document.createElement('img');
        var title = document.createElement('h4');
        var link = document.createElement('a');


// setting the title fir article
        title.innerText = item.title;


// setting the image
        article_image.src = item.avatar;
        article_image.alt = "article image";
        article_image.width = 200;

article_image.onerror = () => {
    article_image.onerror = null;
article_image.src = "./assets/img.jpg";
};


        // setting a link
        link.href = `./pages/content.html?id=${item.id}`;
        link.target = "_blank";
        link.innerText = "Read More...";

        // append all article content

        article.appendChild(article_image);
        article.appendChild(title);
        article.appendChild(link);
        articleContainer.appendChild(article);
    });

   
};
window.onload =  getAllNews();