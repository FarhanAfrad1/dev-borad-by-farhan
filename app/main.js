const taskButtons = document.getElementsByClassName('task-button');
const history = document.getElementById('history');
let totalTask = getValueByUsingId('total-task');
let remainingAssignedTask = getValueByUsingId('assigned-task');

for(let btn of taskButtons){
    btn.addEventListener('click',function(){
        // creating a date object
        const date = new Date();
        const timeOnClikedButton = date.toLocaleTimeString();
        const titleOfTask = btn.parentElement.parentElement.children[1].innerText;

        // upadating total task
        totalTask += 1;
        updateInnerText('total-task', totalTask);

        // updating assigned task
        remainingAssignedTask -= 1
        updateInnerText('assigned-task',remainingAssignedTask)

        // alert
        alert('Board updated Successfully');
        if(remainingAssignedTask === 0){
            alert("congrates!!! You have completed all the current task")
        }

        // history is update
        const p = document.createElement('p');
        p.innerText = `You have completed the task ${titleOfTask} at ${timeOnClikedButton}`;
        p.classList.add('bg-[#F4F7FF]', 'p-2', 'rounded-lg', 'mt-2')
        history.appendChild(p);

        // disabling button
        btn.setAttribute("disabled", "");   
        
    })
}

// clearing history
document.getElementById('clear-history').addEventListener('click',function(event){
    event.target.parentElement.parentElement.children[2].innerText = '';
})
