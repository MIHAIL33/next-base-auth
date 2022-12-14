import { SyncOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UserRoute = ({ children }) => {
    const [ok, setOk] = useState(false)

    const router = useRouter()

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/current-user')
            if (data.ok) setOk(true)
        } catch (err) {
            console.log(err)
            setOk(false)
            router.push("/login")
        }
    }

    return (
        <>
            {!ok ? <SyncOutlined spin className="d-flex justify-content-center display-1 text-primary p-5"/> : <>
                {children}
            </>}
        </>
    )
}

export default UserRoute;