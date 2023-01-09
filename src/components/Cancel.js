const Cancel = () => {
    window.location = "http://localhost:3000/Cancel"
    return (
        <html>
            <head>
                <title>Checkout canceled</title>
                <link rel="stylesheet" href="style.css"/>
            </head>
            <body>
                <section>
                    <p>Forgot to add something to your cart? Shop around then come back to pay!</p>
                </section>
            </body>
        </html>
    )
}
export default Cancel