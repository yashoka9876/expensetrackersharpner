import React, { useRef } from 'react'

const Authentication = () => {
    const Email=useRef();
    const Password=useRef();
    const ConfirmPassword=useRef();
    
    
    async function SignUp(event){
        event.preventDefault()
        const AuthObj={
            email:Email.current.value,
            password:Password.current.value,
            returnSecureToken:true
        }
        if(Password.current.value !== ConfirmPassword.current.value){
            window.confirm('password an confirm password are not same');
            return;
        }
        try{
        const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDa_jbUsg5x1ywvKesSXurNjxjYY7Hn2BU',{
            method:'POST',
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify(AuthObj)
        })
        if(!response.ok){
            throw new Error('Not created passowor')
        }
            const data=await response.json();
            console.log(data);
        }catch(error){
            console.error('Error updating cart item:', error);
        }
        
    }










  return (
    <div className='d-flex flex-column  justify-content-center border border-2 border-black align-items-center'>
        <h1 className='mb-4'>Sign Up</h1>
        <form onSubmit={SignUp} className="row g-3 border border-black border-4  w-25 rounded-3" >
            
            <div className='form-group'>
                <label htmlFor="staticEmail2"  >Email</label>
                <input ref={Email} type="text" className='form-control' id="staticEmail2" required/>
            </div>
            <div >
                <label htmlFor="inputPassword2" >Password</label>
                <input ref={Password} type="password" className="form-control" id="inputPassword2" required />
            </div>
            <div >
                <label htmlFor="confirmPassword" >ConfirmPassword</label>
                <input ref={ConfirmPassword} type="password" className="form-control" id="confirmPassword" required />
            </div>
            <div className='d-flex justify-content-center '>
                <button type="submit" className="btn btn-primary mb-3 hover active">Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default Authentication