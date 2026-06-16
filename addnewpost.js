URL = "https://jsonplaceholder.typicode.com/posts";

async function fetchposts() {
    const response = await fetch(URL)
    const response2 = await response.json()
    // console.log(`Here is the response${response}`)
    const response3 = await JSON.stringify(response2)
    // console.log(`Here is the response 2${response2}`)
    // console.log(`Here is the response 3${response3}`)
    // localStorage.setItem("Response" , response)
    // localStorage.setItem("Response2" , response2)
    localStorage.setItem("Response3", response3)
    const ArraySize = response2.length
    console.log(`Here is array size: ${ArraySize}`)
    // response2.forEach((element,index)=>{
    //     console.log(element.ID)
    // })
    // return ArraySize;
}
fetchposts()
async function addNewPost(e) {
    e.preventDefault();
    const response = await fetch(URL)
    const response2 = await response.json()
    let ArraySize = await response2.length
    
    try {
        fetchposts()
        console.log(`Here is array size asdf: ${ArraySize}`)
        var UserID = document.getElementById("userID")
        UserID.value =await ArraySize++
        await console.log(`Here is the Array Size: ${ArraySize++}`)
        await console.log(`Here is the User ID: ${UserID.value}`)
        const ID = document.getElementById("ID")
        console.log(ID.value)
        const Title = document.getElementById("title")
        console.log(Title.value)
        const Body = document.getElementById("body")
        console.log(Body.value)

        const myObj={"userid":ArraySize++,
            "id":ArraySize++,
            "title":Title.value,
            "body":Body.value
        }
        console.log(myObj)
        const postData = fetch(URL,{
            method:'POST',
                header:{
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(myObj)
            
        }) 
    }
    catch (e) {
        console.log("It is not working due to :", e)
    }
};