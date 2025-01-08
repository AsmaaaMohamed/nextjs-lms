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
export interface ContactDto {
  name: string;
  email: string;
  subject: string;
  mobile: string;
  message: string;
}