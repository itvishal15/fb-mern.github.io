import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import axios from '../axios'
import Mypost from './Mypost'
// import Pusher from 'pusher-js'




import db from '../firebase'

// const pusher = new Pusher('b78b91e99ca7bc5ebd44', {
//     cluster: 'ap2'
//   });

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([]) 

    const syncFeed = () => {
        axios.get('/retrieve/posts')
        .then((res) => {
            console.log(res.data)
            setPostsData(res.data)
        })
    }

    // useEffect(() => {
    //     const channel = pusher.subscribe('posts');
    //     channel.bind('inserted', function(data) {
    //       syncFeed()
    //     });
    // }, [])

    useEffect(() => {
        syncFeed()
    }, [])
 

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />
            

            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.avatar}
                        message={entry.text}
                        timestamp={entry.timestamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                ))
            }
                 {/* Our old posts */}
                 <Mypost
                    profile='https://yt3.ggpht.com/ytc/AMLnZu8Lo7yf38Fce5eJoeaaIjzQddNHvG8WDkQEJbyC=s900-c-k-c0x00ffffff-no-rj'
                    img='https://cdn.techinasia.com/wp-content/uploads/2021/02/newton.png'
                    user='Newton School'
                    time='about 15 days ago'
                    msg='Recently our first batch of 2022 got placed...Congratulations'
                 />
                 <Mypost
                    profile='https://static.toiimg.com/photo/72359999.cms'
                    img='https://www.aroundpune.com/wp-content/uploads/2018/10/waterfalls.jpg'
                    user='Vishal'
                    time='about 20 days ago'
                    msg='Most beautifull waterfall in PUNE....Devkund waterfall'
                 />
                  <Mypost
                    profile='https://unboxingstartups.com/wp-content/uploads/2021/11/Unfolding-Steve-Jobs-and-Apple-Story.jpg'
                    img='https://media.npr.org/assets/img/2011/10/24/ap080115083026-d5d2dbba4dd115402b8116eaa6aca30b507acb04.jpg'
                    user='Steve Jobs'
                    time='about a month ago'
                    msg='Our 2nd generation M2 chip Macbook is finally here like never before......'
                 />
                 <Mypost
                    profile='https://cmmodels.com/wp-content/uploads/2021/03/lara-cover-model-international-long-hair-studio-shoot-suit-cool-leather-edgy.jpg'
                    img='https://www.atriumstaff.com/wp-content/uploads/2018/01/AdobeStock_141468190.jpg'
                    user='Mini'
                    time='about a month ago'
                    msg='Always invest in yourself instead of materialistic things...it will worth it'
                 />
                  <Mypost
                    profile='https://bullishbears.com/wp-content/uploads/2021/04/What-Are-FAANG-Stocks.jpg'
                    img='https://imageio.forbes.com/specials-images/imageserve/5da63b70db40260006202a39/faangs/960x0.jpg?format=jpg&width=960'
                    user='FAANG JOBS'
                    time='about 2 months ago'
                    msg='Get your dream jon in FAANG...'
                 />
                  <Mypost
                    profile='https://patterns.dev/img/reactjs/react-logo@3x.svg'
                    img='https://cdn.eventil.com/uploads/event/header_image/437139/card_original.webp'
                    user='React.JS'
                    time='about 5 months ago'
                    msg='In React conference 2022 we are presenting more new features in react along with old bug fixes...'
                 />
        </div>
    )
}

export default Feed
