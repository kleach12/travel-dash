import './Signup.css'

export default function InfoInput({placeholderValue}){
    console.log(placeholderValue)
    return(
        <input className='signup_input' placeholder={placeholderValue}/>
    )
}