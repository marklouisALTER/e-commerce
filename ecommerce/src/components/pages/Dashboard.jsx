import React, { useEffect,useState } from 'react';
import { useAuth } from '../Authentication/Auth';
import { useNavigate,Link } from 'react-router-dom';
import { Leftbar } from '../mini-components/Leftbar';
import { Header } from '../mini-components/Header';
import { Breadcrumbs } from '../mini-components/Breadcrumbs';

export const Dashboard = ({title}) => {

  const { isAuthenticated,logout,getUser } = useAuth();
  const navigate = useNavigate();
  const [user] = useState(getUser());

  const [leftbar, setLeftbar] = useState(true);

  useEffect(() => {

    if(!isAuthenticated()){
      navigate('/login');
    }

    document.title = title;

  },[isAuthenticated, title])

  return (
      <div className='w-screen h-screen flex'>
        <Leftbar leftbar={leftbar}/>
        <div className='w-full h-full'>
        <Header user={user} logout={logout} leftbar={() => setLeftbar(prevState => !prevState)}/>
          <div className='row-span-6'>
          
            <div className='m-2'>
                <Breadcrumbs/>
            </div>
          
          </div>

        </div>
      </div>
  )
}
