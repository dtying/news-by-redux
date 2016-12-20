import React from 'react';

const PageFooter = () => {
  return (
    <footer>
      <ul>
        <li>
          <iframe src="https://ghbtns.com/github-btn.html?user=dtying&repo=news-by-redux&type=watch&count=true"
                  style={{width: '95px', height: '20px'}}
                  className="github-btn"
                  title="Start on GitHub"
                  allowTransparency="true" frameBorder="0" scrolling="no">
          </iframe>
        </li>

        <li>
          <iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=DTYing&show_screen_name=true"
                  style={{width: '230px', height: '20px'}}
                  allowTransparency="true" frameBorder="0" scrolling="no">
          </iframe>
        </li>
      </ul>
    </footer>
  );
};


export default PageFooter;
