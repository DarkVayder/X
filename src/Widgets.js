import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='Widgets__input'>
        <SearchIcon className='widgets__searchIcon'/>
        <input placeholder='Search X' type='text' />
      </div>

      <div className='widget__widgetContainer'>
        <h2>Trends for you</h2>
      </div>

      <TwitterTweetEmbed tweetId={"1770805644192313695"} />

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Ridwan_alaps"
        options={ {height: 400} }
        />

      <TwitterShareButton url={'https://web.facebook.com/?_rdc=1&_rdr'}
        options={{Text: "#myreact dev projects", via: "DarkVayder"}}
        />
    </div>
  )
}

export default Widgets