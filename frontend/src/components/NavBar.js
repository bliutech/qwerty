import {Link} from 'react-router-dom';
import classes from './NavBar.module.css';

export default function NavBar(){
    return(
        <header className={classes.header}>
            <h1 className={classes.logo}> </h1>
            <nav>
                <ul>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/'>Home</Link></li>
                </ul>
            </nav>
        </header>
    );
}