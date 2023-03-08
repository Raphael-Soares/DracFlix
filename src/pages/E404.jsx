import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

function E404() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/browse");
    }, []);

    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>Redirecting to the home page.</p>
        </div>
    );
}

export default E404;
