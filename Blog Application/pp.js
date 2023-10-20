document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.querySelector('#blog-form form');
    const titleInput = document.querySelector('#title');
    const contentInput = document.querySelector('#content');
    const postList = document.querySelector('#post-list');
  // script.js
document.addEventListener('DOMContentLoaded', function () {
    // ... (your existing code)
    
    // Save the entire HTML content of the body element to local storage
    const saveToLocalStorage = () => {
    const blogContent = document.body.innerHTML;
    localStorage.setItem('blogContent', blogContent);
    };
    
    // Load the content from local storage when the page loads
    const loadFromLocalStorage = () => {
    const storedBlogContent = localStorage.getItem('blogContent');
    if (storedBlogContent) {
        document.body.innerHTML = storedBlogContent;
    }
    };
    
    // Call the load function to load content on page load
    loadFromLocalStorage();
    
    // ... (your existing code)
    
    // Add an event listener to save the content whenever the form is submitted
    blogForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // ... (your existing code)
    
    // After adding a new post, save the updated content to local storage
    saveToLocalStorage();
    });
    });
    blogForm.addEventListener('submit', function (e) {
        e.preventDefault();
 
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
 
        if (title === '' || content === '') {
            alert('Please fill in both title and content fields.');
            return;
        }
 
        const postItem = document.createElement('li');
        postItem.innerHTML = `
            <h3 style="display:flex; align-item:center; witdth:100%; justify-content:flex-start; flex-wrap:nowrap ">${title}</h3><br/>
        
            <p style="display:flex; align-item:center; witdth:100%; justify-content:flex-start; flex-wrap:nowrap ">${content}</p><br/>

            <button class="edit-button" style="padding: 5px; border-radius: 10px; font-size: 1em; background-color: indianred; color:white;">Edit</button>
            <br/>
            
            <button class="delete-button" style="padding: 5px; border-radius: 10px; font-size: 1em; background-color: indianred; color:white;">Delete</button>
            <br/>
        `;
 
        postList.appendChild(postItem);
 
        titleInput.value = '';
        contentInput.value = '';
    });
 
    postList.addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-button')) {
            const postItem = e.target.parentElement;
            const title = postItem.querySelector('h3').textContent;
            const content = postItem.querySelector('p').textContent;
 
            titleInput.value = title;
            contentInput.value = content;
 
            postList.removeChild(postItem);
        } else if (e.target.classList.contains('delete-button')) {
            const postItem = e.target.parentElement;
            postList.removeChild(postItem);
        }
    });
 });
 
 