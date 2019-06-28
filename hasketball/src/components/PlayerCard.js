import React from 'react';
import ShowModal from './ShowModal'
import { withRouter } from 'react-router-dom';



class PlayerCard extends React.Component {

	fullName = () => {
		return `${this.props.player.f_name} ${this.props.player.l_name}`
	}

	draftAndDrop = () => {
	   return this.props.myTeam.includes(this.props.player) ? <div className="ui basic red button" onClick={this.props.dropPlayer} id={this.props.player.api_id}>Drop</div> : <div className="ui basic green button" onClick={this.props.draftPlayer} id={this.props.player.api_id}>Draft</div>
	}

	handleButtons = () => {
		return this.props.location.pathname === "/team" || this.props.location.pathname === "/" ? this.draftAndDrop() : null
	}

	render(){
		return(
			<div className="card" id={this.props.player.api_id}>
		    <div className="content">
		      <div className="header">
		        {this.fullName()}
		      </div>
		      <div className="meta">
		        Postion: {this.props.player.position}
		      </div>
		      <div className="description">
		      </div>
		    </div>
		    <div className="extra content">
		      <div className="ui two buttons">
		        {this.handleButtons()}
		        <ShowModal id={this.props.player.api_id} player={this.props.player} className="modal"/>
		      </div>
		    </div>
		  </div>
		)
	}
}

export default withRouter(PlayerCard);
