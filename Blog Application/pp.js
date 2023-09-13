// script.js
document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.querySelector('#blog-form form');
    const titleInput = document.querySelector('#title');
    const contentInput = document.querySelector('#content');
    const postList = document.querySelector('#post-list');
 
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
            <h3>${title}</h3><br/>
        
            <p>${content}</p><br/>

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
 
 