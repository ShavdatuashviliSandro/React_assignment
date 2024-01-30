import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../redux/authSlice';

const Navbar = () => {
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-xl font-bold">
                    Movie App
                </Link>
                <div className="space-x-4">
                    <Link to="/movies" className="text-white hover:underline">
                        Movies
                    </Link>
                    {isAuthenticated && (
                        <>
                            <Link to="/favorites" className="text-white hover:underline">
                                Favorites
                            </Link>
                            <Link to="/ratings" className="text-white hover:underline">
                                Ratings
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white hover:underline cursor-pointer focus:outline-none"
                            >
                                Logout
                            </button>
                        </>
                    )}
                    {!isAuthenticated && (
                        <Link to="/login" className="text-white hover:underline">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
