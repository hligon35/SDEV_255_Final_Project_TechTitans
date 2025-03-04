import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div>
            <h2>Access Denied</h2>
            <p>You do not have permission to view this page.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default Unauthorized;
