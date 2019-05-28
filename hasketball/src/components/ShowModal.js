import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Bulls from '../logo_image/Bulls.gif'


class ShowModal extends React.Component {
  state = {
    playerStats: []
  }

  showStats = (e) => {
    console.log(e.target.id)
    fetch("https://www.balldontlie.io/api/v1/season_averages?player_ids[]=" + `${e.target.id}`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        playerStats: data.data[0]
      })
      console.log(data.data[0])
      })
  }

   teamLogo = {
    "76ers": "http://content.sportslogos.net/logos/6/218/full/3588_philadelphia_76ers-secondary-2015.png",
    "Bucks": "http://content.sportslogos.net/logos/6/225/full/5318.gif",
    "Bulls": "http://content.sportslogos.net/logos/6/221/full/hj3gmh82w9hffmeh3fjm5h874.png",
    "Cavaliers": "http://content.sportslogos.net/logos/6/222/full/fh4wdzfefsmfcaxut0absohlk.png",
    "Celtics": "http://content.sportslogos.net/logos/6/213/full/slhg02hbef3j1ov4lsnwyol5o.png",
    "Clippers": "http://content.sportslogos.net/logos/6/236/full/ioxjye9im9phdgfyfxvj1xb71.png",
    "Grizzlies": "http://content.sportslogos.net/logos/6/231/full/efgmdqnx7x9vie7e1zkzecqv3.png",
    "Hawks": "http://content.sportslogos.net/logos/6/220/full/5663.png",
    "Heat": "http://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif",
    "Hornets": "http://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png",
    "Jazz": "http://content.sportslogos.net/logos/6/234/full/8316e7nrg5xuouqqo21bjgem9.png",
    "Kings": "http://content.sportslogos.net/logos/6/240/full/832.png",
    "Knicks": "http://content.sportslogos.net/logos/6/216/full/6031.png",
    "Lakers": "http://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.png",
    "Magic": "http://content.sportslogos.net/logos/6/217/full/wd9ic7qafgfb0yxs7tem7n5g4.gif",
    "Mavericks": "http://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif",
    "Nets": "http://content.sportslogos.net/logos/6/3786/full/137_brooklyn-nets-primary-2013.png",
    "Nuggets": "http://content.sportslogos.net/logos/6/229/full/5991.gif",
    "Pacers": "http://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png",
    "Pelicans": "http://content.sportslogos.net/logos/6/4962/full/2681_new_orleans_pelicans-primary-2014.png",
    "Piston": "http://content.sportslogos.net/logos/6/223/full/lgv5ssjmmchyoe66kkvh0tlzd.gif",
    "Raptors": "http://content.sportslogos.net/logos/6/227/full/yfypcwqog6qx8658sn5w65huh.png",
    "Rockets": "http://content.sportslogos.net/logos/6/230/full/8xe4813lzybfhfl14axgzzqeq.gif",
    "Spurs": "http://content.sportslogos.net/logos/6/230/full/8xe4813lzybfhfl14axgzzqeq.gif",
    "Suns": "http://content.sportslogos.net/logos/6/238/full/4370_phoenix_suns-primary-2014.png",
    "Thunder": "http://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif",
    "Timberwolves": "http://content.sportslogos.net/logos/6/232/full/zq8qkfni1g087f4245egc32po.gif",
    "Trailblazers": "http://content.sportslogos.net/logos/6/239/full/5767.gif",
    "Warriors": "http://content.sportslogos.net/logos/6/1429/full/5993.gif",
    "Wizards": "http://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png"
  }

  render(){
    console.log(this.props.player.team_name)
    return(
      <Modal trigger={<div id={this.props.player.api_id} onClick={this.showStats} className="ui basic blue button">View Stats</div>}>
        <Modal.Header>{this.props.player.f_name +" "+ this.props.player.l_name}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={this.teamLogo[this.props.player.team_name]} />
          <Modal.Description>
            <Header>2018 Season Averages</Header>
            <ul>
              <p>{this.state.playerStats ? "Points: " + this.state.playerStats.pts : null}</p>
              <p>{this.state.playerStats ? "Assists: " + this.state.playerStats.ast : null}</p>
              <p>{this.state.playerStats ? "Games Played: " + this.state.playerStats.games_played : null}</p>
              <p>{this.state.playerStats ? "Minutes Played: " + this.state.playerStats.min : null}</p>

            </ul>

          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default ShowModal
