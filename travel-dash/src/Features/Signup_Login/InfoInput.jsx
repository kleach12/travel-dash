import './Signup.css'
export default function InfoInput({placeholderValue, valueFunction, val}){


    return(
        <input className='signup_input' placeholder={placeholderValue} value = {val} onChange={(e) => valueFunction(e)} />
    )
}