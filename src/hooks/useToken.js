import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        // console.log('user inside user', user);

        const email = user?.user?.email;
        const currentUser = { email: email }
        if (email) {
            fetch(`https://secret-fjord-61926.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify(currentUser)
            })
                .then(Response => Response.json())
                .then(data => {
                    console.log('Data Inside Use Token', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);

                })
        }


    }, [user])
    return [token];
}
export default useToken;