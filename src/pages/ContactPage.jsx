const styles = {
    bottomMargin: {
        marginBottom: "27%"
    },
}

export default function ContactPage() {
    return <>
        <div style={styles.bottomMargin}>
            <h2>Contact Me</h2>
            <div className="contactContainer">
                <div class="contactDiv">
                    <h2>Email: <a href="mailto:harryfelty@gmail.com">harryfelty@gmail.com</a></h2>
                </div>
            </div>

        </div>
    </>
}