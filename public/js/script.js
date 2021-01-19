



 const form = document.querySelector('form')
 const input = document.querySelector('input')

 form.addEventListener('submit',(e)=>{
     e.preventDefault()
     const data = input.value
     fetch(`/weather?adderess=${data}`).then(res=>{
        return res.json();
    }).then(data=>{
     
        if(data.error){
          return  document.querySelector('.show').innerHTML = data.error
        }
         input.value = ''
    
        document.querySelector('.show').innerHTML = data.forcast
        document.querySelector('.location').innerHTML = data.location 
    }).catch(err=>{
        console.error(err)
    })
     
 })