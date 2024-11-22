import React, { useState } from 'react';
import { EmailProvider } from './components/context/EmailContext';
import Head from './components/Head';
import Form from './components/Form';
import Card from './components/Card';


const App = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <EmailProvider>
        <Head />
            <Form onSubmit={handleFormSubmit} />
            {userData && <Card {...userData} />}
      
    </EmailProvider>
  );
};

export default App;

