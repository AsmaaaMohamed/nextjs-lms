export interface RegisterUserDto{
    name:string;
    email:string;
    provider:string;
    password:string;
    confirmPassword:string;
}
export interface LoginUserDto {
  email: string;
  password: string;
}