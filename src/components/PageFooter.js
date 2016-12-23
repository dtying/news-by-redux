import React from 'react';

class PageFooter extends React.Component {
  constructor(props){
    super(props);
    this.toggleFooter = this.toggleFooter.bind(this);
  }

  toggleFooter(){
    this.footer.style.display = 'none';
  }

  render(){
    return (
      <footer ref={(footer) => {this.footer = footer}}>
        <h5>Thank you for your visiting ! Like it ?</h5>
        <ul>
          <li>
            <iframe src="https://ghbtns.com/github-btn.html?user=dtying&repo=news-by-redux&type=watch&count=true"
                    style={{width: '95px', height: '20px'}}
                    align="middle"
                    className="github-btn"
                    title="Start on GitHub"
                    allowTransparency="true" frameBorder="0" scrolling="no">
            </iframe>
          </li>

          <li>
            <iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=DTYing&show_screen_name=true"
                    style={{width: '190px', height: '20px'}}
                    allowTransparency="true" frameBorder="0" scrolling="no">
            </iframe>
          </li>
        </ul>
        <span className="close" onClick={()=>this.toggleFooter()}>&times;</span>
      </footer>
    );
  }
}


export default PageFooter;
