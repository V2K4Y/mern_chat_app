import { useState } from "react";

function send() {
    alert("Sent!");
}

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='flex bg-blue-100 h-screen justify-center place-items-center'>
            <form className="flex flex-col gap-2 w-[250px] item-">
                <input value={username}
                  onChange={ev => setUsername(ev.target.value)}
                  type="text" placeholder="Username" 
                  className="p-1 rounded-sm outline-none"/>
                <input value={password}
                  onChange={ev => setPassword(ev.target.value)}
                  type="password" placeholder="Password" 
                  className="p-1 rounded-sm outline-none"/>
                <button onClick={send} className="bg-blue-600 text-white p-2 rounded-md">Register</button>
                <p className="text-center">Already a user? <a href="#login">Login</a></p>
            </form>
        </div>
    )
}