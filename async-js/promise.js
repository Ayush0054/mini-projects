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

function createpost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong');
            }
        },2000 )
        
    });
}


// createpost({title:'post three', body:'this is post three'}).then(getPosts);


// asyn / await

// async function init(){
//     await createpost({title:'post three', body:'this is post three'});
//  getPosts();
// }

// init();

// aysnc await with fetch
 
 async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
 const data = await res.json();
 console.log(data); 
}
 fetchUsers();
//promise all

// const promise1 = Promise.resolve("hello world")
// const promise2=10;
// const promise3= new Promise((resolve, reject) => 
//   setTimeout(resolve,2000,"goodbye")
// );
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
// Promise.all([promise1,promise2,promise3,promise4]).then(values => console.log(values)); 

