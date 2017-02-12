import React from 'react';

class PageFooter extends React.Component {
  constructor(props) {
    super(props);
    this.collapseFooter = this.collapseFooter.bind(this);
    this.expandFooter = this.expandFooter.bind(this);
  }

  collapseFooter() {
    this.footer.style.width =  '20px';
    this.h5.style.visibility = 'hidden';
    this.closeBtn.style.visibility = 'hidden';
    this.ltBtn.style.visibility = 'visible';
  }

  expandFooter(){
    this.footer.style.width =  '100%';
    this.h5.style.visibility = 'visible';
    this.closeBtn.style.visibility = 'visible';
    this.ltBtn.style.visibility = 'hidden';
  }

  render() {
    return (
      <footer ref={(footer) => {this.footer = footer}}>
        <h5 ref={(h5) => {this.h5 = h5}}>Thank you for your visiting ! Like it ?</h5>
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
            <iframe
              src="https://platform.twitter.com/widgets/follow_button.html?screen_name=DTYing&show_screen_name=true"
              style={{width: '190px', height: '20px'}}
              allowTransparency="true" frameBorder="0" scrolling="no">
            </iframe>
          </li>
        </ul>
        <span ref={(close) => {this.closeBtn = close}} className="close" onClick={()=>this.collapseFooter()}>&times;</span>
        <span ref={(lt) => {this.ltBtn = lt}} className="lt" onClick={()=>this.expandFooter()}>&lt;</span>
      </footer>
    );
  }
}


export default PageFooter;
