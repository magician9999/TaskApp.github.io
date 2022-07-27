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

        
        const task_checkbox=document.createElement('button');
        task_checkbox.classList.add('checkbox');
        task_checkbox.innerHTML=`<svg stroke="currentColor" fill="currebtColor" stroke-width="0" viewBox="1 -1.1 15 15" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M1.5 13A1.5 1.5 0 003 14.5h10a1.5 1.5 0 001.5-1.5V8a.5.5 0 00-1 0v5a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5h8a.5.5 0 000-1H3A1.5 1.5 0 001.5 3v10z" clip-rule="evenodd"></path></svg>`

        const task_edit=document.createElement('button');
        task_edit.classList.add('edit');
        task_edit.innerHTML='EDIT';

        const task_delete=document.createElement('button');
        task_delete.classList.add('delete');
        task_delete.innerHTML='DELETE';

        
        task_change.appendChild(task_checkbox);
        task_change.appendChild(task_edit);
        task_change.appendChild(task_delete);

        task_column.appendChild(task_change);
        task_section.appendChild(task_column);
        input.value=" ";
       

        task_checkbox.addEventListener('click',()=>{
            task_checkbox.classList.add('checkboxchange');
              
        })
        task_delete.addEventListener('click',()=>{
        task_section.removeChild(task_column);
        })

        task_edit.addEventListener('click',()=>{
            if(task_edit.innerText.toLowerCase()=="edit")
               {
                task_input.removeAttribute('readonly');
                task_input.focus();
                task_edit.innerHTML="SAVE";
               }
            else{
                task_input.setAttribute('readonly','readonly');
                task_edit.innerHTML="EDIT";
            }
        });

    });
});