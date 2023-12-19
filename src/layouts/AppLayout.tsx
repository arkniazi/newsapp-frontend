import React, {ReactNode} from 'react';
import { connect } from 'react-redux'; // Import connect from react-redux
import { logout } from '../setup/redux/actions/authAction';
import { RootState } from '../setup/redux/types/actionTypes';
import Navbar from '../components/navbar/Navbar';

interface AppLayoutProps {
  children: ReactNode;
  isAuthenticated: boolean;
  user: any; 
  logout: () => void;
}


const AppLayout: React.FC<AppLayoutProps> = ({ children, isAuthenticated, user, logout }) => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="pb-5 min-vh-100">
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <div className='mt-5'>{children}</div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    accessToken: state.auth.accessToken,
  };
};
export default connect(mapStateToProps, { logout})(AppLayout);
