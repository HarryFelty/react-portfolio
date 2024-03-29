const styles = {
    bottomMargin: {
        marginBottom: "17%"
    },
}
export default function AboutPage() {
    return <>
        <div style={styles.bottomMargin}>
            <h2>About Me</h2>
            <div className="aboutContainer">
                <div class="aboutDiv">
                    <p> I am a full-stack web developer. About a year ago I graduated from Penn State with a B.S. is cybersecurity. Since then, I have worked in
                        IT and obtained my CompTIA Security+ Certificate. I was recently introduced to programming and found that I
                        greatly enjoy it. After spending some time self-learning and exploring the field, I decided to join a bootcamp
                        to help develop my skills. I attended the edX bootcamp through the University of Pennsylvania. The bootcamp taught me many technologies that are used
                        in full-stack development. As I continue to grow as a developer, I am looking for a fulfilling career
                        as a full-stack web developer. </p>
                </div>
            </div>

        </div>
    </>
}