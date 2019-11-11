import React from 'react';
import { NavLink, Link } from 'react-router';

import { setAccessTokenUnplash } from '../unsplash/';
import { authenticationUrl } from '../unsplash/';

class Home extends React.Component {

	handleClick() {
	    location.assign(authenticationUrl);
	}

	render() {
		const token = localStorage.getItem('token');

		return (
			<main className="main-wrapper">
				<header className="header">
					<div className="container-my">
						<h1>Дипломная работа по курсу "JavaScript"</h1>
						<h2>Выполнил: Кошелев Александр</h2>
					</div>
				</header>
			    <div className="block-home">
			        <div className="registration-form">
			        	<p>Для продолжения необходимо авторизироваться через Unsplash.com</p>
			          <div className='row_btn'>
									<button className="but_auth" onClick={this.handleClick.bind(this)} Link to = '/auth'>Авторизироваться</button>
								</div>
			        </div>
			    </div>
		    </main>
		)
	}
}
export default Home;
