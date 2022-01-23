import {Link} from 'react-router-dom';
import classes from './NavBar.module.css';
import logo from '..//files/logo-square.svg';

export default function NavBar(){
    return(
        <header className={classes.header}>
            <h1 className={classes.logo}> </h1>
            <nav>
                <ul>
                <logo><img className="smalllogo" src={logo} alt ="logo" width = "8%" /></logo>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}