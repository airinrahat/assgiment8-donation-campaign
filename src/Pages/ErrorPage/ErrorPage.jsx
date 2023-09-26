import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen text-center mt-9">
           <h2 className="text-3xl"> Error</h2><br></br>
           <Link to={`/`}> <button>go to home</button></Link>
           </div>
    );
};

export default ErrorPage;