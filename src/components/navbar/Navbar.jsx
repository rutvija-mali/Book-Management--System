import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                   <Link to={'/'} className="navbar-brand">Book Management System</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link to={'/categories'} className='nav-link' >Categories</Link>
                        </li>
                        <li className="nav-item">
                          <Link to={'/suppliers'}  className='nav-link' >Suppliers</Link>
                        </li>
                       
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;