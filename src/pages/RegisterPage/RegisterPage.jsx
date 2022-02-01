import React from 'react'
import { useForm } from "react-hook-form";
import { API } from "../../shared/services/api";

export default function RegisterPage () {
    const { register, handleSubmit } = useForm();

    // const user = {
    //     name: 'Abel',
    //     username: 'abelcabezaroman',
    //     email: 'contacto@abelcabezaroman.com',
    //     password: 'ABCedf123'
    // }

    const onSubmit = formData => {
        API.post('register', formData).then(res => {
            console.log('Register user',);
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            {/* register your input into the hook by invoking the "register" function */}
            <label htmlFor="name">Name</label>
            <input name="name" id="name" defaultValue="Abel Cabeza Román"
                   ref={register({ required: true })}/>

            {/*<input name="role" id="role" defaultValue="admin"*/}
            {/*       ref={register({ required: true })}/>*/}

            <label htmlFor="email">Email</label>
            <input name="email" id="email" defaultValue="contacto@abelcabezaroman.com"
                   ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>

            {/*<label htmlFor="username">Username</label>*/}
            {/*<input name="username" id="username" defaultValue="abelcabezaroman"*/}
            {/*       ref={register({ required: true, minLength: 4 })}/>*/}

            {/* include validation with required or other standard HTML validation rules */}
            <label htmlFor="password">Password</label>
            <input name="password" id="password" type="password" defaultValue="ABCedf123"
                   ref={register({ required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })}/>
            {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}

            <input type="submit" value="Register"/>
        </form>
    )
}
