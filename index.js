const userBookmarks = [];

//function to create bookmark object
const createBookmark = (name, link) => {
    const newObj = {};
    newObj.name = name;
    newObj.link = link;
    return newObj;
}

// function to add bookmark object to array
const addBookmark = (obj) => {
    userBookmarks.push(obj);
}

//function to render the array
//invoke render function: create li element, add bookmarkName to li, append to ul
const listEle = document.body.querySelector('#list');

let counter = 0;
const liMaker = (obj) => {
    const newBookmark = document.createElement('li');
    newBookmark.setAttribute("class", "remover");
    newBookmark.setAttribute("id", `${counter}`)
    newBookmark.innerHTML = obj.name;
    const removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove this bookmark";
    newBookmark.append(removeButton);
    counter++;
    return newBookmark;
}

const saveButton = document.body.querySelector('#save')
saveButton.addEventListener("click", () => {
    const bookmarkName = document.body.querySelector('#bookmark-name').value;
    const bookmarkLink = document.body.querySelector('#bookmark-link').value;
    addBookmark(createBookmark(bookmarkName, bookmarkLink));
    listEle.innerHTML = '';  // Prevent repeating bookmarks
    userBookmarks.map((bookmark) => {
        const line = liMaker(bookmark);
        listEle.append(line);     
    })
    const removeEle = document.querySelectorAll(".remover"); //This is an array
    for (let i = 0; i < removeEle.length; i++) {
        removeEle[i].addEventListener("click", () => {
            document.getElementById(removeEle[i].id).remove();
            userBookmarks.splice(i, 1);
        })    
    }
})

