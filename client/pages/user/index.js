import axios from "axios";
import { useState, useContext } from "react";
import UserRoute from "../../components/routes/UserRoute";
import { Context } from "../../context";

const UserIndex = () => {
    const {state: {user}} = useContext(Context)

    return (
        <UserRoute>
            <h1 className="jumbotron text-center square">{JSON.stringify(user)}</h1>
        </UserRoute>
    )
}

export default UserIndex;