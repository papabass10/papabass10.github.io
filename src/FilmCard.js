import React, {Component} from 'react';

class FilmCard extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}

	wasClicked = () => {
		const url = this.props.film.url;
		console.log(url)
		return this.props.clicked(url)
	}

	render() {
		return(
			<div className='bg-gold dib br3 b--blue pa3 ma2 grow bw3 w5' onClick={this.wasClicked}>
				<h2> {this.props.film.title} </h2>
				<p> Episode: {this.props.film.episode_id}</p>
				<p> {this.props.film.opening_crawl}</p>
			</div>
		);
	}
}

export default FilmCard;