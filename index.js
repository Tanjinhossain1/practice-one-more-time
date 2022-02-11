document.getElementById('use-button').addEventListener('click',function(){
    const inputFeild = document.getElementById('use-email');
    const inputValue = inputFeild.value;
     // now passward time 
    const passwardFeild = document.getElementById('use-passward');
    const passwardValue = passwardFeild.value;
    if(inputValue =='tanjinhossain2003@gmail.com'){
        if(passwardValue == '01861557343'){
            window.location.href= "baperbank.html"
        }
    }
   
    
    
})