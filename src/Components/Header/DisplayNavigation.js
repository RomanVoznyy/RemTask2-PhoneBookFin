import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from '../../redux/auth/auth-operation';
import { getUser, isLoggedIn } from '../../redux/auth/auth-selector';
import { BsPersonCircle } from 'react-icons/bs';
import SmallLogo from './SmallLogo';

const DisplayNavigation = () => {
  const user = useSelector(state => getUser(state));
  const loggedIn = useSelector(state => isLoggedIn(state));
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="displayNavigationBox">
      <nav className="navigate">
        <SmallLogo />
        <div className="navLinkBox">
          <NavLink
            to="/"
            className={navData =>
              navData.isActive ? 'navLink active' : 'navLink'
            }
          >
            Home
          </NavLink>
          {loggedIn && (
            <NavLink
              to="/phonebook"
              className={navData =>
                navData.isActive ? 'navLink active' : 'navLink'
              }
            >
              Phonebook
            </NavLink>
          )}
        </div>
        {!loggedIn && (
          <div className="regLinkBox">
            <NavLink
              to="/login"
              className={navData =>
                navData.isActive ? 'navLink active' : 'navLink'
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={navData =>
                navData.isActive ? 'navLink active' : 'navLink'
              }
            >
              Register
            </NavLink>
          </div>
        )}
      </nav>
      {loggedIn && (
        <div className="userMenuBox">
          <div className="personBox">
            <BsPersonCircle className="personIcon" />
            <span className="personGreeting">
              Welcome on board, {user.name}
            </span>
          </div>
          <button className="exitButton" onClick={handleExit}>
            Exit
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayNavigation;
