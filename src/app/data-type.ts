export interface signUp{
    name: string;
    password: string;
    email: string;
}
export interface login{
    email: string;
    password: string;
}
export interface product{
    name: string;
    price: number;
    category: string;
    color: string;
    description: string;
    image: string;
    id:number;
}