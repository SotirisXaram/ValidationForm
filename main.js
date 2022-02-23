const form = document.getElementById(`form`)
const username = document.getElementById(`username`)
const email = document.getElementById(`email`)
const password = document.getElementById(`password`)
const password2 = document.getElementById(`password2`)




function showerror(input,msg){
    const formcontrol = input.parentElement;
    formcontrol.className = `form-control error`;
    const small = formcontrol.querySelector(`small`);
    small.innerText = msg;
};

function showsucces(input){
    const formcontrol = input.parentElement;
    formcontrol.className = `form-control succes`;
};

function checkPassMatch(input1,input2){
    if(input1.value!==input2.value){
        showerror(input2,`Password donsnt match`)
    }
}

const checkEmail = (input) => {
  
     const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(re.test(input.value.trim())){
            showsucces(input)
        }else{
            showerror(input,`Email is not valid`)
        }
};

function checkRequireds(inputArray){
    inputArray.forEach((element=>{
        if(element.value.trim()===``){
            showerror(element,`${getFieldName(element)} is required`)
        }else{
            showsucces(element)
        }
    }));
}
function checklength(input,min,max){
    if(input.value.length<min){
        showerror(input,`${getFieldName(input)} must be at least ${min} characters`)
    }else if(input.value.length>max){
        showerror(input,`${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showsucces(input)
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1)
}

form.addEventListener(`submit`,function(e){
    e.preventDefault();
    
    checkRequireds([username,email,password,password2])
     checklength(username,3,15)
     checklength(password,5,15)
     checklength(password2,5,15)
     checkEmail(email)
     checkPassMatch(password,password2)
      
})


