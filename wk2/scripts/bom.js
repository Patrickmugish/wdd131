document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', function() {
        const chapterTitle = input.value.trim(); 


        if (chapterTitle === '') {
            alert('Please enter a chapter title.');
            input.focus();
            return;
        }
        const li = document.createElement('li');
        li.textContent = chapterTitle;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        deleteButton.addEventListener('click', function() {
            list.removeChild(li); 
            input.focus(); 
        });

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = '';

        input.focus();
    });

    input.focus();
});