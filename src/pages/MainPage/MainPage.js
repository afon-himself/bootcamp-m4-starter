import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';

class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Header />
            </div>
        );
    }
}
 
export default MainPage;