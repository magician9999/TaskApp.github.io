window.addEventListener('load',()=>
{
    const input=document.querySelector(".input-main");
    const form=document.querySelector("#input");
    const task_section=document.querySelector('.task-section');

    form.addEventListener('submit',(e)=>
    {
        e.preventDefault();
        const task=input.value;
        console.log(task);

        const task_column=document.createElement('div');
        task_column.classList.add("task-column");

        const task_row=document.createElement('div');
        task_row.classList.add("task-row");
        
        //task_row.innerHTML=task;
       
        task_column.appendChild(task_row);


        const task_input=document.createElement('input');
        task_input.classList.add("task");
        task_input.type="text";
        task_input.value= task;
        task_input.setAttribute("readonly","readonly");

        task_row.appendChild(task_input);

        const task_change=document.createElement('div');
        task_change.classList.add('change');


        const task_edit=document.createElement('button');
        task_edit.classList.add('edit');
        task_edit.innerHTML='Edit';

        const task_delete=document.createElement('button');
        task_delete.classList.add('delete');
        task_delete.innerHTML='Delete';

        task_change.appendChild(task_edit);
        task_change.appendChild(task_delete);

        task_column.appendChild(task_change);
        task_section.appendChild(task_column);
        input.value=" ";
       
        task_delete.addEventListener('click',()=>{
        task_section.removeChild(task_column);
        })

        task_edit.addEventListener('click',()=>{
            if(task_edit.innerText.toLowerCase()=="edit")
               {
                task_input.removeAttribute('readonly');
                task_input.focus();
                task_edit.innerHTML="Save";
               }
            else{
                task_input.setAttribute('readonly','readonly');
                task_edit.innerHTML="Edit";
            }
        });

    });
});