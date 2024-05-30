"use client"

import { userVerify } from "@/lib/endpointCalls";
import styles from "./about.module.css";

const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('entered');
    try {
        const response = await userVerify();
        console.log(response);
    } catch (err) {
        console.log('Error:', err);
    }
}

const AboutPage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Click me</button>
            </form>
        </div>
    );
}

export default AboutPage;