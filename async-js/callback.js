const posts = [ 
    {title:'post one', body:'this is post one'},
    {title:'post two', body:'this is post two'}
];
let op = '';
 const news = (post,index)=>{
    op+= `<li>${post.title}</li>`;
 };
function getPosts(){
    setTimeout(() =>{
        posts.forEach(news);
        document.body.innerHTML = op;
    },1000);
}

function createpost(post, callback){
    setTimeout(() =>{
        posts.push(post);
        callback();
    },2000 )
}



createpost({title:'post three', body:'this is post three'},getPosts);