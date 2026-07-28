import "./Error.css";

function Error({ message }) {

    if (!message) return null;

    return (
        <div className="error-box">
            {message}
        </div>
    );

}

export default Error;