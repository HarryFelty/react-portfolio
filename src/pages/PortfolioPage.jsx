const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '300px 300px 300px',
        gap: '15px',
    },
    dogImage: {
        backgroundImage: 'URL(./src/assets/dog.png)',
        backgroundSize: 'contain',
        minHeight: '300px'
    },
    ledWall: {
        backgroundImage: 'URL(./src/assets/LED.png)',
        backgroundSize: 'contain',
        minHeight: '300px'
    },
    calc: {
        backgroundImage: 'URL(./src/assets/calculator.png)',
        backgroundSize: 'contain',
        minHeight: '300px'
    },
    pastel: {
        backgroundImage: 'URL(./src/assets/pastel.png)',
        backgroundSize: 'contain',
        minHeight: '300px'
    }
}

export default function PortfolioPage() {
    return <>
        <div>
            <h2>My Portolio</h2>
            <div style={styles.grid}>

                <a href="https://simonmagidenko.github.io/Dog-Image-Generator/" class="card topcard">
                    <div style={styles.dogImage}>
                        <span>Dog Image Generator</span>
                    </div>
                </a>
                <a href="https://www.google.com" class="card midcard1">
                    <div style={styles.ledWall}>
                        <span>LED Wall</span>
                    </div>
                </a>
                <a href="https://www.google.com" class="card midcard2">
                    <div style={styles.calc}>
                        <span>Calculator</span>
                    </div>
                </a>
                <a href="https://www.google.com" class="card botcard1">
                    <div style={styles.pastel}>
                        <span>Pastel Puzzles</span>
                    </div>
                </a>
                <a href="https://www.google.com" class="card botcard2">
                    <div>
                        <span>Run Buddy</span>
                    </div>
                </a>

            </div>
        </div>
    </>
}