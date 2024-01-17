import {Link} from "react-router-dom";
const PageNotFound = ()=> {

    return (
        <div className="not-found-page-container">
            <div className="font-roboto">
                <h1 className="not-found-title main-orange-text-color">Sorry, the page is not found!</h1>
                <Link to="/" className="go-back-button">Go to Homepage</Link>
            </div>
        </div>
    );
}

export default PageNotFound;
