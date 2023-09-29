export default function ContactPage() {
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
                        <label for="exampleFormControlInput1">Email Address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <button type="button" class="btn btn-secondary btn-lg">Submit</button>
                </form>
            </div>
        </div>
    </>
}