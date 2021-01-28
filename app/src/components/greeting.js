import axios from "axios";
import React, { useState, useEffect } from "react"

export default function Greeting ({ name }) {
    const [data, setData] = useState(0)
    const baseUri = "/"

    useEffect(async () => {
        const res = await axios.get(baseUri + "api/greeting?name=" + name)

        setData(res.data)
    }, []);

    return (
        <p>Hello, {data.hello}!</p>
    )
}
