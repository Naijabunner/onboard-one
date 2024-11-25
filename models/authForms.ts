import { InputModeOptions } from "react-native";


  interface SignInProps {
    title: string;
    placeholder: string;
    name: string;
    type: InputModeOptions;
    isSecret: boolean;
  }
  
  export class SignUp {
    title: string;
    placeholder: string;
    name: string;
    type: InputModeOptions;
    isSecret: boolean;

    constructor(
      title: string,
      placeholder: string,
      name: string,
      type: InputModeOptions,
      isSecret: boolean
    ) {
      this.title = title;
      this.placeholder = placeholder;
      this.name = name;
      this.type = type;
      this.isSecret = isSecret;
    }
  }

  export class SignIn implements SignInProps {
    title: string;
    placeholder: string;
    name: string;
    type: InputModeOptions;
    isSecret: boolean;

    constructor(
      title: string,
      placeholder: string,
      name: string,
      type: InputModeOptions,
      isSecret: boolean
    ) {
      this.title = title;
      this.placeholder = placeholder;
      this.name = name;
      this.type = type;
      this.isSecret = isSecret;
    }
  }
  
  