const inputField = document.querySelector('input');
const AddTodo = document.querySelector('.btn');
const OutputField = document.querySelector('#output')

AddTodo.addEventListener('click', ()=>{
    const todo = inputField.value;
    if(todo === ''){
        alert('please enter todo here');
        return;
    } else{
        const li = document.createElement('li');
        li.innerHTML = `<span>${todo}</span>
                <button id="listBtn" onClick="removeTodo(this)">Remove todo</button>`;
                OutputField.appendChild(li);
                inputField.value = '';
    }
})

function removeTodo  (element) {
    element.parentNode.remove();
}