import './header.scss';
import AppBar from '@material-ui/core/AppBar';
import Cart from '../component/renderCart';

// import { Link } from 'react-router-dom';

const Header = ()=>{
    return (
        <header>
            <h1>Sort Front</h1>

            <nav>
                {/* <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        {/* <a href="/contact-us">Contact us</a> */}
                       {/* <Link to="/help">help</Link>
                    </li>
                </ul> */}
            </nav>
            <Cart />

           

           
        </header>

    );
        
    

};

export default Header;

