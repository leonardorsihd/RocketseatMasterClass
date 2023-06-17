import React from "react";
import { IUserProps } from '../interfaces/userInterface';

const User: React.FC<IUserProps> = ({ user }) => {
    return(
        <div>
            <img src={user.avatar} alt={user.avatar} />
            <strong>Name: </strong> {user.first_name} <br />
            <strong>Email: </strong> {user.email} <br /><br />
        </div>
    );
}

export default User;