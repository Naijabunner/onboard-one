import { SignIn, SignUp } from "../models/authForms";


export const SignUpForm =[
    new SignUp('Name','john doe','name','text',false),
    new SignUp('Email Address','johndoe@email.com','email','email', false),
    new SignUp('Password','*******','password','text',true),
    new SignUp('Confirm Password','*******','confirmPassword','text',true),
]
export const SignInForm =[
    new SignIn('Email Address','johndoe@email.com','email','text',false),
    new SignIn('Password','*******','password','text', true),
]