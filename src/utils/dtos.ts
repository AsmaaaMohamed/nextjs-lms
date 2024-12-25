export interface RegisterUserDto{
    name:string;
    email:string;
    password:string;
    confirmPassword:string;
}
export interface LoginUserDto {
  email: string;
  password: string;
}