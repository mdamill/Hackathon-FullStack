import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Cards from '../components/Cards';
import UserTable from '../components/UserTable';

function Home({ logout, user }) {
  return (
    <>
      <Navbar loginText="Logout" onLoginClick={logout} />
      <HeroSection />
      <Cards />
      <UserTable user={user} />
      <Footer />
    </>
  );
}

export default Home;