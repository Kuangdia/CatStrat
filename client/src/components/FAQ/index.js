
export default function FAQ({ loginUserID }) {

    const userID = localStorage.getItem('userID')

    // let navigate = useNavigate();

    // useEffect(() => {
    //     Axios.get(`/strategy/${userID}`)
    //     if (userID) {
    //         console.log('userID', userID)
    //         Axios.get(`http://localhost:8080/strategy/${userID}`)
    //             .then((res) => {
    //                 console.log('response', res.data)
    //                 setData(res.data)
    //             })
    //     } else {
    //         // navigate("/");
    //     }
    // }, [loginUserID, creation]);


    return (
        <section className="full-container">
            <div className="strategies">
                <h1>Frequently Asked Questions</h1>
                <details className="faq">
                    <summary className="question">Custom trading</summary>
                    <p>The end-of-day trading strategy involves trading near the close of markets. End-of-day traders become active when it becomes clear that the price is going to ‘settle’ or close..</p>
                </details>

                <details className="faq">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details>

                <details className="faq">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details>

                <details className="faq">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details>

                <details className="faq">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details>

                <details className="faq">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details>

                <details className="faq">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details>

                <details className="faq">
                    <summary>Custom trading</summary>
                    <p>I made this custom trading strategy that uses psychic powers.</p>
                </details>

            </div>

        </section>
    );
}