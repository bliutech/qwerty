import logo from '../files/logo-whole.svg';

export default function Home(){
    return(
        <div>
            <h1>Welcome to Qwerty!</h1>
            <img className="big-logo" src={logo} alt = "logo" />
            <p className='white-rectangle'>This is a safe space for people of all identities. Qwerty is the first social website focused on connecting
                students with similar classes and gender identities. To get started simply input your information and our system
                will automatically connect you with other students. If there are no other students with similar gender identities
                only your classes will be considered in the matching system. Have fun, and good luck with studying!
            </p>
            <p className='white-rectangle'><b>Existing users: </b>Log in with your username and password using the Login tab at the top of the page.
            <br /><br /><b>New users: </b>Use the Register tab to create an account and submit your information.</p>
        </div>
    );
}