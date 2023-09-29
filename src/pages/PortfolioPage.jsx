import Dog from "../assets/dog.png"
import Led from "../assets/LED.png"
import Calc from "../assets/calculator.png"
import Figure from "../assets/runbuddy.png"
const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '350px 350px',
        gap: '50px',
        padding: '5%',
        backgroundColor: 'rgb(211, 211, 211)',
        rowGap: '15%',
        height: '1000px'
    },
}

export default function PortfolioPage() {
    return <>
        <div>
            <h2>My Portolio</h2>
            <div style={styles.grid}>

                <a href="https://simonmagidenko.github.io/Dog-Image-Generator/">
                    <div>
                        <h3>Dog Image Generator</h3>
                        <img src={Dog} alt="" srcset="" />
                    </div>
                </a>
                <a href="https://simonmagidenko.github.io/Dog-Image-Generator/">
                    <div>
                        <h3>LED Wall</h3>
                        <img src={Led} alt="" srcset="" />
                    </div>
                </a>
                <a href="https://simonmagidenko.github.io/Dog-Image-Generator/">
                    <div>
                        <h3>Calculator</h3>
                        <img src={Calc} alt="" srcset="" />
                    </div>
                </a>
                <a href="https://simonmagidenko.github.io/Dog-Image-Generator/">
                    <div>
                        <h3>Run Buddy</h3>
                        <img src={Figure} alt="" srcset="" />
                    </div>
                </a>

            </div>
        </div>
    </>
}