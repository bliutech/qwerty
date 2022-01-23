import {Link} from 'react-router-dom';
import classes from './NavBar.module.css';
import Logo from '../files/logo-square.svg';

export default function NavBar(){
    return(
        <header className={classes.header}>
            <h1 className={classes.logo}> </h1>
            <nav>
                <ul>
                <img className="smalllogo" src={Logo} alt ="logo" width = "8%" />
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
                </ul>
            </nav>
        </header>
    );
}