import '../css/styles.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <style jsx global>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');
            `}
                </style>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp