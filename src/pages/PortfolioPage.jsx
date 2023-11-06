import Dog from "../assets/dog.png"
import Weather from "../assets/weather.png"
import Figure from "../assets/runbuddy.png"
import Culinary from "../assets/culinary-kickstart.png"
import DayPlanner from "../assets/daily-planner.png"
import Password from "../assets/password-generator.png"

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '350px 350px',
        gap: '50px',
        padding: '5%',
        backgroundColor: 'rgb(211, 211, 211)',
        rowGap: '15%',
        height: '1000px',
        borderRadius: '15px',
    },
    h2Margin: {
        marginBottom: '30px'
    },
    h3Padding: {
        paddingLeft: '1%'
    }
}

export default function PortfolioPage() {
    return <>
        <div>
            <h2 style={styles.h2Margin}>My Portolio</h2>
            <div style={styles.grid}>

                <a href="https://culinary-kickstart-a5ceb2617d5b.herokuapp.com/">
                    <div>
                        <h3 style={styles.h3Padding}>Culinary Kickstart</h3>
                        <img src={Culinary} alt="" srcset="" />
                    </div>
                </a>
                <a href="https://harryfelty.github.io/WeatherApp/">
                    <div>
                        <h3 style={styles.h3Padding}>Weather App</h3>
                        <img src={Weather} alt="" srcset="" />
                    </div>
                </a>
                <a href="https://harryfelty.github.io/DayPlanner/">
                    <div>
                        <h3 style={styles.h3Padding}>Daily Planner</h3>
                        <img src={DayPlanner} alt="" srcset="" />
                    </div>
                </a>
                <a href="https://harryfelty.github.io/PasswordGenerator/">
                    <div>
                        <h3 style={styles.h3Padding}>Password Generator</h3>
                        <img src={Password} alt="" srcset="" />
                    </div>
                </a>
            </div>
        </div>
    </>
}