import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';

class MainPage extends Component {
    render() { 
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        <div className="main-page__movies" />
                    </section>
                    <aside className="main-page__favorites">
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;