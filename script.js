const input = document.querySelector('.input');
const add = document.querySelector('.add');
const wrapper = document.querySelector('.wrapper')

add.addEventListener('click', function(e) {
    let newTask = document.createElement('p');
    newTask.classList.add('new-task');

    newTask.textContent = input.value;
    wrapper.appendChild(newTask);

    newTask.addEventListener('click', (e) => {
        newTask.style.textDecoration = ' line-through';
        newTask.style.opacity = '0.5';
    });

    newTask.addEventListener('dblclick', (e) => {
        wrapper.removeChild(newTask);
    });
})