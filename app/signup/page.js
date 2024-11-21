"use client";

import React from 'react'
import { createUser } from '../actions'
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { loginSchema } from '../lib/zodSchemas';


export default function signup() {
  const [state, formAction] = React.useActionState(createUser, undefined)

  const [form, fields] = useForm({
    state,
    onValidate({formData}){
        return parseWithZod(formData, {schema:loginSchema})
    },
    shouldValidate:"onBlur",
    shouldRevalidate:"onInput"
  })

  return (
    <div>

        <form id={form.id} onSubmit={form.onSubmit} action={formAction}>
            <input type='text' 
            defaultValue={fields.username.initialValue}
            name={fields.username.name} key={fields.username.key}/>
            <p>{fields.username.errors}</p>
            <input 
            defaultValue={fields.password.initialValue}
            type='password' name={fields.password.name} key={fields.password.key}/>
            <p>{fields.password.errors}</p>
            <button type='submit'> Signup </button>
        </form>
    </div>
  )
}
