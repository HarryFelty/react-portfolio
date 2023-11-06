const styles = {
    bottomMargin: {
        marginBottom: "3%",
    },
    h2Margin: {
        marginBottom: '30px'
    }
}

const downloadFile = () => {
    // Create a link to the document file
    const link = document.createElement('a');
    link.href = '../src/docs/Harry Felty Resume - Copy.docx';
    link.download = 'HarryFeltyResume.docx';

    link.click();
};

export default function ResumePage() {
    return <>
        <div style={styles.bottomMargin}>
            <h2 style={styles.h2Margin}>My Resume</h2>
            <div className="skills">
                <div>
                    <h3>Skills:</h3>
                    <ul>
                        <li>React</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>
                        <li>Microsoft Active Directory</li>
                        <li>Microsoft Endpoint Manager</li>
                    </ul>
                    <br />
                    <h3 className="certHeader">Certificates:</h3>
                    <ul>
                        <li>CompTIA Security+ (2022-2025)</li>
                    </ul>
                </div>
                <div>
                    <h3>Work Experience:</h3>
                    <ul>
                        <li>Bloom Insurance Agency: Technical Support Specialist</li>
                        <ul>
                            <li>Managed user accounts on various platforms such as Active
                                Directory and Duo.</li>
                            <li>Assisted end users with troubleshooting various issues.</li>
                        </ul>
                        <br />
                        <li>Reliance Bank: Information Technology Intern</li>
                        <ul>
                            <li>Assisted the company with a conversion from Novell-based network to
                                Active Directory Microsoft-based network with minimal impact to end-
                                users.</li>
                            <li>Lead the company in performing Nessus scans to discover and
                                ameliorate network vulnerabilities.</li>
                            <li>Managed user accounts through Active Directory.</li>
                            <li>Rolled out and utilized Microsoft Endpoint Manager in order to
                                troubleshoot various technical problems on machines at various site
                                locations.</li>
                        </ul>
                    </ul>
                </div>
                <div>
                    <h3>Education:</h3>
                    <ul>
                        <li>Full-Stack Coding Bootcamp: Certificate</li>
                        <ul>
                            <li>Studied key technologies and concepts of full stack web
                                development.</li>
                            <li>Worked in teams, using concepts of agile development, to build fully
                                functional web applications with polished user interfaces using both
                                front-end and back-end technologies.</li>
                            <li>Designed databases using MySQL and MongoDB in order to store
                                and use data for the various web apps built.</li>
                        </ul>
                        <br />
                        <li>B.S. Security and Risk Analysis: Cybersecurity</li>
                        <ul>
                            <li>Studied Information Technology Management and Networking with a
                                focus in cybersecurity and cyber-forensics.</li>
                            <li>Used Enigma Glass to analyze and investigate security events.</li>
                            <li>Developed various applications using Java to perform tasks based on
                                needs of the end-user.</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <button onClick={downloadFile}>Download Full Resume</button>
        </div>
    </>
}