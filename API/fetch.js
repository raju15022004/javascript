const apiEndPoint="https://jsonplaceholder.typicode.com/posts"


const getButton=document.querySelector("#getPost");
const createButton=document.querySelector("#createPost");
const updateButton=document.querySelector("#updatePost");
const patchButton=document.querySelector("#patchPost");
const deleteButton=document.querySelector("#deletePost");


// function getpost(){
// fetch(apiEndPoint).then((response)=>{
//   response.json().then((posts)=> console.log(posts));
// });
// }

const getPosts= async ()=>{
  const response=await fetch(apiEndPoint);
  const posts = await response.json();
  return posts;
};

getButton.addEventListener("click", async()=>{
  const posts = await getPosts();
  console.log(posts);
})

const createPost = async (newpost)=>{
  try {
    const response =await fetch(apiEndPoint,{
      method:"POST",
      body:JSON.stringify(newpost),
      headers:{"Content-type": "application/json; charset=UTF-8"},
    });
    if(response.status !=201){
      throw new Error(`Something went wrong, Status Code: ${response.status}`);

    }
    const post = await response.json();
    return post;

  }
  catch(error){
    console.log(error);
  }
};


const updatePost= async (newpost, id)=>{
   try {
    const response = await fetch(`${apiEndPoint}/${id}`,{
      method:"PUT",
      body:JSON.stringify(newpost),
      headers:{"Content-type": "application/json; charset=UTF-8"},
    });
    if(response.status !=200){
      throw new Error(`Something went wrong, Status Code: ${response.status}`);

    }
    const post = await response.json();
    return post;

  }
  catch(error){
    console.log(error);
  }
};


createButton.addEventListener("click",async()=>{
  const newPost={
    title:"New Post Title",
    body:"New Post Body",
    userId:1,
  };

  const createdPost = await createPost(newPost);
  console.log(createdPost);
});


updateButton.addEventListener("click",async()=>{
  const newPost={
    id:2,
    title:"Updated Post Title",
    body:"Updated Post Body",
    userId:1,
  };

  const updatePost = await updatePost(newPost,2);
  console.log(updatePost);
});



