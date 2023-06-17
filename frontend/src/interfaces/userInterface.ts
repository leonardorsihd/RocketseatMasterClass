export interface IUser{
    id: number,
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

export interface IUserProps {
    user: IUser;
}

export interface IUserList {
    data: IUser[];
}