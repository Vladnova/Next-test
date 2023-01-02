

export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
};

export type contactType = {
    id:string,
    name: string,
    email:string,
    address: IAddress,
};

export type postType ={
    id: string,
    title: string,
    body: string,
};

export type socialType ={
    id: string,
    icon: string,
    path: string,
}