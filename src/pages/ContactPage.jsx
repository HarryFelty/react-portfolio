import { useState } from "react"

export default function ContactPage() {
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidMessage, setIsValidMessage] = useState(true);

    function validateEmail() {
        const email = document.querySelector('#email');

    }
    return <>
        <div>
            <h2>Contact Me</h2>
            <div className="formContainer">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Frodo Baggins" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" id="message" rows="5"></textarea>
                    </div>
                    <button type="button" class="btn btn-secondary btn-lg">Submit</button>
                </form>
            </div>
        </div>
    </>
}