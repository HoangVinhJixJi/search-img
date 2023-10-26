import './App.css';
import React, { useState, useEffect} from 'react';

import axios from 'axios';

// Name app: searchimg
// ACCESS_KEY: irCZM-4JHDCM-WqlguSykBh6tKkOJMI17LAL-AacwxI
// SECRET_KEY: KHSvmiR-yMq5fkaJ8zjbANIMebye9sb-fbqhjm0Widc
// Link: https://api.unsplash.com/photos/?client_id=irCZM-4JHDCM-WqlguSykBh6tKkOJMI17LAL-AacwxI

var listImg = [
  {
  "id": "_TFgiFZyH6M",
  "slug": "a-woman-standing-in-front-of-a-rock-formation-_TFgiFZyH6M",
  "created_at": "2023-04-28T13:09:43Z",
  "updated_at": "2023-10-26T12:36:53Z",
  "promoted_at": "2023-05-30T12:24:01Z",
  "width": 8640,
  "height": 5760,
  "color": "#262626",
  "blur_hash": "LGDbye^i0K58yDIVVr.7yDE2Mx%L",
  "description": "Amongst expansive red sands and spectacular sandstone rock formations, Hisma Desert – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
  "alt_description": "a woman standing in front of a rock formation",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?ixid=M3w1MjA4MzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1682687221080-5cb261c645cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687221080-5cb261c645cb"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/a-woman-standing-in-front-of-a-rock-formation-_TFgiFZyH6M",
  "html": "https://unsplash.com/photos/a-woman-standing-in-front-of-a-rock-formation-_TFgiFZyH6M",
  "download": "https://unsplash.com/photos/_TFgiFZyH6M/download?ixid=M3w1MjA4MzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/_TFgiFZyH6M/download?ixid=M3w1MjA4MzN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 137,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": {
  "impression_urls": [
  "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515662&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
  "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515865&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
  ],
  "tagline": "Made to Change",
  "tagline_url": "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
  "sponsor": {
  "id": "mYizSrdJkkU",
  "updated_at": "2023-10-26T16:00:28Z",
  "username": "neom",
  "name": "NEOM",
  "first_name": "NEOM",
  "last_name": null,
  "twitter_username": "neom",
  "portfolio_url": "http://www.neom.com",
  "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
  "location": "NEOM, Saudi Arabia",
  "links": {
  "self": "https://api.unsplash.com/users/neom",
  "html": "https://unsplash.com/@neom",
  "photos": "https://api.unsplash.com/users/neom/photos",
  "likes": "https://api.unsplash.com/users/neom/likes",
  "portfolio": "https://api.unsplash.com/users/neom/portfolio",
  "following": "https://api.unsplash.com/users/neom/following",
  "followers": "https://api.unsplash.com/users/neom/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "discoverneom",
  "total_collections": 7,
  "total_likes": 0,
  "total_photos": 202,
  "accepted_tos": true,
  "for_hire": false,
  "social": {
  "instagram_username": "discoverneom",
  "portfolio_url": "http://www.neom.com",
  "twitter_username": "neom",
  "paypal_email": null
  }
  }
  },
  "topic_submissions": {
  "spirituality": {
  "status": "approved",
  "approved_on": "2023-06-01T11:28:34Z"
  }
  },
  "user": {
  "id": "mYizSrdJkkU",
  "updated_at": "2023-10-26T16:00:28Z",
  "username": "neom",
  "name": "NEOM",
  "first_name": "NEOM",
  "last_name": null,
  "twitter_username": "neom",
  "portfolio_url": "http://www.neom.com",
  "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
  "location": "NEOM, Saudi Arabia",
  "links": {
  "self": "https://api.unsplash.com/users/neom",
  "html": "https://unsplash.com/@neom",
  "photos": "https://api.unsplash.com/users/neom/photos",
  "likes": "https://api.unsplash.com/users/neom/likes",
  "portfolio": "https://api.unsplash.com/users/neom/portfolio",
  "following": "https://api.unsplash.com/users/neom/following",
  "followers": "https://api.unsplash.com/users/neom/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "discoverneom",
  "total_collections": 7,
  "total_likes": 0,
  "total_photos": 202,
  "accepted_tos": true,
  "for_hire": false,
  "social": {
  "instagram_username": "discoverneom",
  "portfolio_url": "http://www.neom.com",
  "twitter_username": "neom",
  "paypal_email": null
  }
  }
  },
  {
  "id": "2clnOFL27Pk",
  "slug": "a-blurry-photo-of-a-person-walking-down-some-stairs-2clnOFL27Pk",
  "created_at": "2023-10-18T10:10:03Z",
  "updated_at": "2023-10-26T16:24:01Z",
  "promoted_at": "2023-10-26T16:24:01Z",
  "width": 3637,
  "height": 2433,
  "color": "#a6a6a6",
  "blur_hash": "L7GR|~9YSk01?b-:o#4.t8-oD%E1",
  "description": null,
  "alt_description": "a blurry photo of a person walking down some stairs",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1697623707881-41209d546747?ixid=M3w1MjA4MzN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1697623707881-41209d546747?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1697623707881-41209d546747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1697623707881-41209d546747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1697623707881-41209d546747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1697623707881-41209d546747"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/a-blurry-photo-of-a-person-walking-down-some-stairs-2clnOFL27Pk",
  "html": "https://unsplash.com/photos/a-blurry-photo-of-a-person-walking-down-some-stairs-2clnOFL27Pk",
  "download": "https://unsplash.com/photos/2clnOFL27Pk/download?ixid=M3w1MjA4MzN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/2clnOFL27Pk/download?ixid=M3w1MjA4MzN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 2,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {
  "film": {
  "status": "rejected"
  }
  },
  "user": {
  "id": "QUiyVx0bUmg",
  "updated_at": "2023-10-26T16:26:11Z",
  "username": "kkalerry",
  "name": "Klara Kulikova",
  "first_name": "Klara",
  "last_name": "Kulikova",
  "twitter_username": null,
  "portfolio_url": "https://www.behance.net/kkalerry",
  "bio": "photographer, Moscow",
  "location": null,
  "links": {
  "self": "https://api.unsplash.com/users/kkalerry",
  "html": "https://unsplash.com/@kkalerry",
  "photos": "https://api.unsplash.com/users/kkalerry/photos",
  "likes": "https://api.unsplash.com/users/kkalerry/likes",
  "portfolio": "https://api.unsplash.com/users/kkalerry/portfolio",
  "following": "https://api.unsplash.com/users/kkalerry/following",
  "followers": "https://api.unsplash.com/users/kkalerry/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1571926438880-b72cc011dc22image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1571926438880-b72cc011dc22image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1571926438880-b72cc011dc22image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "kkalerry",
  "total_collections": 3,
  "total_likes": 85,
  "total_photos": 1992,
  "accepted_tos": true,
  "for_hire": true,
  "social": {
  "instagram_username": "kkalerry",
  "portfolio_url": "https://www.behance.net/kkalerry",
  "twitter_username": null,
  "paypal_email": null
  }
  }
  },
  {
  "id": "kn739_wsRwY",
  "slug": "a-vase-filled-with-pink-flowers-on-top-of-a-table-kn739_wsRwY",
  "created_at": "2023-10-20T15:55:15Z",
  "updated_at": "2023-10-26T16:16:01Z",
  "promoted_at": "2023-10-26T16:16:01Z",
  "width": 3152,
  "height": 3940,
  "color": "#d9d9d9",
  "blur_hash": "LHMQw~00tl%g_NM_WBRiXT-=MwM_",
  "description": null,
  "alt_description": "a vase filled with pink flowers on top of a table",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1697817292223-2e8ffb72c82d?ixid=M3w1MjA4MzN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1697817292223-2e8ffb72c82d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1697817292223-2e8ffb72c82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1697817292223-2e8ffb72c82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1697817292223-2e8ffb72c82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1697817292223-2e8ffb72c82d"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/a-vase-filled-with-pink-flowers-on-top-of-a-table-kn739_wsRwY",
  "html": "https://unsplash.com/photos/a-vase-filled-with-pink-flowers-on-top-of-a-table-kn739_wsRwY",
  "download": "https://unsplash.com/photos/kn739_wsRwY/download?ixid=M3w1MjA4MzN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/kn739_wsRwY/download?ixid=M3w1MjA4MzN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 2,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {},
  "user": {
  "id": "RJLa3GZIJkE",
  "updated_at": "2023-10-26T16:16:12Z",
  "username": "sixteenmilesout",
  "name": "Sixteen Miles Out",
  "first_name": "Sixteen",
  "last_name": "Miles Out",
  "twitter_username": "Sixteenmilesout",
  "portfolio_url": "http://www.sixteenmilesout.com",
  "bio": "Photographer | Creator | Come follow me on Instagram @sixteenmilesout\r\nI post here because I want to share the gift God has given me. Be blessed as you use my work!  If you'd like to donate to my work my PayPal link is below. ",
  "location": "California Central Coast",
  "links": {
  "self": "https://api.unsplash.com/users/sixteenmilesout",
  "html": "https://unsplash.com/@sixteenmilesout",
  "photos": "https://api.unsplash.com/users/sixteenmilesout/photos",
  "likes": "https://api.unsplash.com/users/sixteenmilesout/likes",
  "portfolio": "https://api.unsplash.com/users/sixteenmilesout/portfolio",
  "following": "https://api.unsplash.com/users/sixteenmilesout/following",
  "followers": "https://api.unsplash.com/users/sixteenmilesout/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1644415772148-03a326feb935image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1644415772148-03a326feb935image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1644415772148-03a326feb935image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "sixteenmilesout",
  "total_collections": 13,
  "total_likes": 213,
  "total_photos": 638,
  "accepted_tos": true,
  "for_hire": true,
  "social": {
  "instagram_username": "sixteenmilesout",
  "portfolio_url": "http://www.sixteenmilesout.com",
  "twitter_username": "Sixteenmilesout",
  "paypal_email": null
  }
  }
  },
  {
  "id": "XN6CsQJcWK8",
  "slug": "a-street-sign-in-a-foreign-language-in-front-of-a-building-XN6CsQJcWK8",
  "created_at": "2023-10-24T07:08:27Z",
  "updated_at": "2023-10-26T16:08:01Z",
  "promoted_at": "2023-10-26T16:08:01Z",
  "width": 5103,
  "height": 7284,
  "color": "#f3f3f3",
  "blur_hash": "L%GS7NRjM{IU~qRjM{M{-;M|Rjax",
  "description": null,
  "alt_description": "a street sign in a foreign language in front of a building",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1698131276728-07b0385341b3?ixid=M3w1MjA4MzN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1698131276728-07b0385341b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1698131276728-07b0385341b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1698131276728-07b0385341b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1698131276728-07b0385341b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1698131276728-07b0385341b3"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/a-street-sign-in-a-foreign-language-in-front-of-a-building-XN6CsQJcWK8",
  "html": "https://unsplash.com/photos/a-street-sign-in-a-foreign-language-in-front-of-a-building-XN6CsQJcWK8",
  "download": "https://unsplash.com/photos/XN6CsQJcWK8/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/XN6CsQJcWK8/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 3,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {},
  "user": {
  "id": "--RRlufUoDw",
  "updated_at": "2023-10-26T16:08:01Z",
  "username": "juniperphoton",
  "name": "JuniperPhoton",
  "first_name": "JuniperPhoton",
  "last_name": null,
  "twitter_username": "juniperphoton",
  "portfolio_url": "https://juniperphoton.dev/photonapps/",
  "bio": "📷 Photographer & 📱 Software developer",
  "location": "Shenzhen, China",
  "links": {
  "self": "https://api.unsplash.com/users/juniperphoton",
  "html": "https://unsplash.com/@juniperphoton",
  "photos": "https://api.unsplash.com/users/juniperphoton/photos",
  "likes": "https://api.unsplash.com/users/juniperphoton/likes",
  "portfolio": "https://api.unsplash.com/users/juniperphoton/portfolio",
  "following": "https://api.unsplash.com/users/juniperphoton/following",
  "followers": "https://api.unsplash.com/users/juniperphoton/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1676790033783-b7cca5b552d2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1676790033783-b7cca5b552d2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1676790033783-b7cca5b552d2image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "juniperphoton",
  "total_collections": 10,
  "total_likes": 9,
  "total_photos": 595,
  "accepted_tos": true,
  "for_hire": false,
  "social": {
  "instagram_username": "juniperphoton",
  "portfolio_url": "https://juniperphoton.dev/photonapps/",
  "twitter_username": "juniperphoton",
  "paypal_email": null
  }
  }
  },
  {
  "id": "5gZm2vS1rT8",
  "slug": "a-close-up-of-a-white-wall-with-holes-in-it-5gZm2vS1rT8",
  "created_at": "2023-10-24T00:30:10Z",
  "updated_at": "2023-10-26T15:56:01Z",
  "promoted_at": "2023-10-26T15:56:01Z",
  "width": 5895,
  "height": 3930,
  "color": "#c0c0c0",
  "blur_hash": "L2Ja}{9F4pRP_3RQR%f68{xuD%j[",
  "description": null,
  "alt_description": "a close up of a white wall with holes in it",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1698107244197-eacb51ec990d?ixid=M3w1MjA4MzN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1698107244197-eacb51ec990d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1698107244197-eacb51ec990d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1698107244197-eacb51ec990d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1698107244197-eacb51ec990d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1698107244197-eacb51ec990d"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/a-close-up-of-a-white-wall-with-holes-in-it-5gZm2vS1rT8",
  "html": "https://unsplash.com/photos/a-close-up-of-a-white-wall-with-holes-in-it-5gZm2vS1rT8",
  "download": "https://unsplash.com/photos/5gZm2vS1rT8/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/5gZm2vS1rT8/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 4,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {},
  "user": {
  "id": "MocKbl9vr0c",
  "updated_at": "2023-10-26T15:56:01Z",
  "username": "snapsbyclark",
  "name": "Clark Van Der Beken",
  "first_name": "Clark",
  "last_name": "Van Der Beken",
  "twitter_username": "snapsbyclark",
  "portfolio_url": "https://www.clarkcreative.me/",
  "bio": "👋🏽  One of only 63,906 people named Clark and I'm a creative storyteller based in Boston. I take photos of things that don’t move or talk like architecture, patterns, and textures with an eye for minimalism. ",
  "location": "Boston, MA",
  "links": {
  "self": "https://api.unsplash.com/users/snapsbyclark",
  "html": "https://unsplash.com/@snapsbyclark",
  "photos": "https://api.unsplash.com/users/snapsbyclark/photos",
  "likes": "https://api.unsplash.com/users/snapsbyclark/likes",
  "portfolio": "https://api.unsplash.com/users/snapsbyclark/portfolio",
  "following": "https://api.unsplash.com/users/snapsbyclark/following",
  "followers": "https://api.unsplash.com/users/snapsbyclark/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1556497771011-c5897af6c53b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1556497771011-c5897af6c53b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1556497771011-c5897af6c53b?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "snapsbyclark",
  "total_collections": 11,
  "total_likes": 539,
  "total_photos": 155,
  "accepted_tos": true,
  "for_hire": true,
  "social": {
  "instagram_username": "snapsbyclark",
  "portfolio_url": "https://www.clarkcreative.me/",
  "twitter_username": "snapsbyclark",
  "paypal_email": null
  }
  }
  },
  {
  "id": "YpUFf0kOWQ0",
  "slug": "an-ostrich-looking-at-the-camera-with-a-blurry-background-YpUFf0kOWQ0",
  "created_at": "2023-04-28T13:09:43Z",
  "updated_at": "2023-10-25T18:37:56Z",
  "promoted_at": null,
  "width": 8640,
  "height": 5760,
  "color": "#a6a68c",
  "blur_hash": "LAI#fCx[8wVsVstQx]R+a}t7R*oL",
  "description": "Red Necked Ostrich, Nature Reserve – NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.",
  "alt_description": "an ostrich looking at the camera with a blurry background",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1682687220945-922198770e60?ixid=M3w1MjA4MzN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1682687220945-922198770e60?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1682687220945-922198770e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1682687220945-922198770e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1682687220945-922198770e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682687220945-922198770e60"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/an-ostrich-looking-at-the-camera-with-a-blurry-background-YpUFf0kOWQ0",
  "html": "https://unsplash.com/photos/an-ostrich-looking-at-the-camera-with-a-blurry-background-YpUFf0kOWQ0",
  "download": "https://unsplash.com/photos/YpUFf0kOWQ0/download?ixid=M3w1MjA4MzN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/YpUFf0kOWQ0/download?ixid=M3w1MjA4MzN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 193,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": {
  "impression_urls": [
  "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515659&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
  "https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515862&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
  ],
  "tagline": "Made to Change",
  "tagline_url": "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
  "sponsor": {
  "id": "mYizSrdJkkU",
  "updated_at": "2023-10-26T16:00:28Z",
  "username": "neom",
  "name": "NEOM",
  "first_name": "NEOM",
  "last_name": null,
  "twitter_username": "neom",
  "portfolio_url": "http://www.neom.com",
  "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
  "location": "NEOM, Saudi Arabia",
  "links": {
  "self": "https://api.unsplash.com/users/neom",
  "html": "https://unsplash.com/@neom",
  "photos": "https://api.unsplash.com/users/neom/photos",
  "likes": "https://api.unsplash.com/users/neom/likes",
  "portfolio": "https://api.unsplash.com/users/neom/portfolio",
  "following": "https://api.unsplash.com/users/neom/following",
  "followers": "https://api.unsplash.com/users/neom/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "discoverneom",
  "total_collections": 7,
  "total_likes": 0,
  "total_photos": 202,
  "accepted_tos": true,
  "for_hire": false,
  "social": {
  "instagram_username": "discoverneom",
  "portfolio_url": "http://www.neom.com",
  "twitter_username": "neom",
  "paypal_email": null
  }
  }
  },
  "topic_submissions": {},
  "user": {
  "id": "mYizSrdJkkU",
  "updated_at": "2023-10-26T16:00:28Z",
  "username": "neom",
  "name": "NEOM",
  "first_name": "NEOM",
  "last_name": null,
  "twitter_username": "neom",
  "portfolio_url": "http://www.neom.com",
  "bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
  "location": "NEOM, Saudi Arabia",
  "links": {
  "self": "https://api.unsplash.com/users/neom",
  "html": "https://unsplash.com/@neom",
  "photos": "https://api.unsplash.com/users/neom/photos",
  "likes": "https://api.unsplash.com/users/neom/likes",
  "portfolio": "https://api.unsplash.com/users/neom/portfolio",
  "following": "https://api.unsplash.com/users/neom/following",
  "followers": "https://api.unsplash.com/users/neom/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "discoverneom",
  "total_collections": 7,
  "total_likes": 0,
  "total_photos": 202,
  "accepted_tos": true,
  "for_hire": false,
  "social": {
  "instagram_username": "discoverneom",
  "portfolio_url": "http://www.neom.com",
  "twitter_username": "neom",
  "paypal_email": null
  }
  }
  },
  {
  "id": "k5-SBfIvSZs",
  "slug": "a-person-standing-in-a-tunnel-with-a-light-painting-k5-SBfIvSZs",
  "created_at": "2023-10-23T19:37:14Z",
  "updated_at": "2023-10-26T15:48:01Z",
  "promoted_at": "2023-10-26T15:48:01Z",
  "width": 4672,
  "height": 7008,
  "color": "#0c2626",
  "blur_hash": "LI9%|;M{Mxxu%goeRiof00xtoeRj",
  "description": null,
  "alt_description": "a person standing in a tunnel with a light painting",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1698089650302-557b794790cf?ixid=M3w1MjA4MzN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1698089650302-557b794790cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1698089650302-557b794790cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1698089650302-557b794790cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1698089650302-557b794790cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1698089650302-557b794790cf"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/a-person-standing-in-a-tunnel-with-a-light-painting-k5-SBfIvSZs",
  "html": "https://unsplash.com/photos/a-person-standing-in-a-tunnel-with-a-light-painting-k5-SBfIvSZs",
  "download": "https://unsplash.com/photos/k5-SBfIvSZs/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/k5-SBfIvSZs/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 6,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {},
  "user": {
  "id": "a2Hpvq6iQs4",
  "updated_at": "2023-10-26T16:31:12Z",
  "username": "supergios",
  "name": "Jonny Gios",
  "first_name": "Jonny",
  "last_name": "Gios",
  "twitter_username": "Supergios",
  "portfolio_url": "http://www.jgios.com",
  "bio": "Always looking for the next adventure to capture the next shot. Seize the day. Sony A7 IV . There are more images behind my Unsplash, for commercial projects please contact me.  John 3:16",
  "location": "Lake District",
  "links": {
  "self": "https://api.unsplash.com/users/supergios",
  "html": "https://unsplash.com/@supergios",
  "photos": "https://api.unsplash.com/users/supergios/photos",
  "likes": "https://api.unsplash.com/users/supergios/likes",
  "portfolio": "https://api.unsplash.com/users/supergios/portfolio",
  "following": "https://api.unsplash.com/users/supergios/following",
  "followers": "https://api.unsplash.com/users/supergios/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1600184424687-de96bd61fa67image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1600184424687-de96bd61fa67image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1600184424687-de96bd61fa67image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "jonny.gios",
  "total_collections": 10,
  "total_likes": 102,
  "total_photos": 5421,
  "accepted_tos": true,
  "for_hire": true,
  "social": {
  "instagram_username": "jonny.gios",
  "portfolio_url": "http://www.jgios.com",
  "twitter_username": "Supergios",
  "paypal_email": null
  }
  }
  },
  {
  "id": "CzUvZZOxq-o",
  "slug": "an-empty-parking-lot-in-front-of-a-building-CzUvZZOxq-o",
  "created_at": "2023-10-25T08:28:27Z",
  "updated_at": "2023-10-26T15:40:01Z",
  "promoted_at": "2023-10-26T15:40:01Z",
  "width": 6485,
  "height": 4323,
  "color": "#d9d9f3",
  "blur_hash": "LQMQ^ytTVrkD.9xtjEof~qRio#WB",
  "description": null,
  "alt_description": "an empty parking lot in front of a building",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1698222472029-7ebef66ad90f?ixid=M3w1MjA4MzN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1698222472029-7ebef66ad90f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1698222472029-7ebef66ad90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1698222472029-7ebef66ad90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1698222472029-7ebef66ad90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1698222472029-7ebef66ad90f"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/an-empty-parking-lot-in-front-of-a-building-CzUvZZOxq-o",
  "html": "https://unsplash.com/photos/an-empty-parking-lot-in-front-of-a-building-CzUvZZOxq-o",
  "download": "https://unsplash.com/photos/CzUvZZOxq-o/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/CzUvZZOxq-o/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 1,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {
  "architecture-interior": {
  "status": "rejected"
  }
  },
  "user": {
  "id": "TXicN4rh03Y",
  "updated_at": "2023-10-26T15:40:01Z",
  "username": "jipy32",
  "name": "Jean-Philippe Delberghe",
  "first_name": "Jean-Philippe",
  "last_name": "Delberghe",
  "twitter_username": null,
  "portfolio_url": null,
  "bio": null,
  "location": null,
  "links": {
  "self": "https://api.unsplash.com/users/jipy32",
  "html": "https://unsplash.com/@jipy32",
  "photos": "https://api.unsplash.com/users/jipy32/photos",
  "likes": "https://api.unsplash.com/users/jipy32/likes",
  "portfolio": "https://api.unsplash.com/users/jipy32/portfolio",
  "following": "https://api.unsplash.com/users/jipy32/following",
  "followers": "https://api.unsplash.com/users/jipy32/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-fb-1454421409-c25a188ef774.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-fb-1454421409-c25a188ef774.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-fb-1454421409-c25a188ef774.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "jeanphilippedelberghe",
  "total_collections": 0,
  "total_likes": 7865,
  "total_photos": 266,
  "accepted_tos": true,
  "for_hire": true,
  "social": {
  "instagram_username": "jeanphilippedelberghe",
  "portfolio_url": null,
  "twitter_username": null,
  "paypal_email": null
  }
  }
  },
  {
  "id": "i1vcXHR8v14",
  "slug": "an-empty-parking-garage-with-striped-flooring-i1vcXHR8v14",
  "created_at": "2023-10-25T08:28:27Z",
  "updated_at": "2023-10-26T15:24:01Z",
  "promoted_at": "2023-10-26T15:24:01Z",
  "width": 4480,
  "height": 6720,
  "color": "#a6a6a6",
  "blur_hash": "LKMHGb9F-:WBI8oJt7t70NxvM{Rj",
  "description": null,
  "alt_description": "an empty parking garage with striped flooring",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1698222491864-6c174537885f?ixid=M3w1MjA4MzN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1698222491864-6c174537885f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1698222491864-6c174537885f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1698222491864-6c174537885f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1698222491864-6c174537885f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5ODMzODA4MXw&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1698222491864-6c174537885f"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/an-empty-parking-garage-with-striped-flooring-i1vcXHR8v14",
  "html": "https://unsplash.com/photos/an-empty-parking-garage-with-striped-flooring-i1vcXHR8v14",
  "download": "https://unsplash.com/photos/i1vcXHR8v14/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5ODMzODA4MXw",
  "download_location": "https://api.unsplash.com/photos/i1vcXHR8v14/download?ixid=M3w1MjA4MzN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY5ODMzODA4MXw"
  },
  "likes": 2,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {
  "architecture-interior": {
  "status": "rejected"
  }
  },
  "user": {
  "id": "TXicN4rh03Y",
  "updated_at": "2023-10-26T15:40:01Z",
  "username": "jipy32",
  "name": "Jean-Philippe Delberghe",
  "first_name": "Jean-Philippe",
  "last_name": "Delberghe",
  "twitter_username": null,
  "portfolio_url": null,
  "bio": null,
  "location": null,
  "links": {
  "self": "https://api.unsplash.com/users/jipy32",
  "html": "https://unsplash.com/@jipy32",
  "photos": "https://api.unsplash.com/users/jipy32/photos",
  "likes": "https://api.unsplash.com/users/jipy32/likes",
  "portfolio": "https://api.unsplash.com/users/jipy32/portfolio",
  "following": "https://api.unsplash.com/users/jipy32/following",
  "followers": "https://api.unsplash.com/users/jipy32/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-fb-1454421409-c25a188ef774.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-fb-1454421409-c25a188ef774.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-fb-1454421409-c25a188ef774.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "jeanphilippedelberghe",
  "total_collections": 0,
  "total_likes": 7865,
  "total_photos": 266,
  "accepted_tos": true,
  "for_hire": true,
  "social": {
  "instagram_username": "jeanphilippedelberghe",
  "portfolio_url": null,
  "twitter_username": null,
  "paypal_email": null
  }
  }
  },
  {
  "id": "aQXuX-_tXrk",
  "slug": "a-living-room-with-a-white-couch-and-a-tv-aQXuX-_tXrk",
  "created_at": "2023-10-23T07:56:10Z",
  "updated_at": "2023-10-26T15:16:01Z",
  "promoted_at": "2023-10-26T15:16:01Z",
  "width": 4500,
  "height": 2813,
  "color": "#f3f3f3",
  "blur_hash": "LUOpxu?bM|RP_N%Ns:oe9EIURjj]",
  "description": "The JALG Amber Yellow is a Mid-Century Modern TV stand is a timeless classic. The slender legs accentuate the clean and light vintage design, making it the perfect statement piece for any living room interior.",
  "alt_description": "a living room with a white couch and a tv",
  "breadcrumbs": [],
  "urls": {
  "raw": "https://images.unsplash.com/photo-1698047736474-3c1e5a0d3526?ixid=M3w1MjA4MzN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTgzMzgwODF8&ixlib=rb-4.0.3",
  "full": "https://images.unsplash.com/photo-1698047736474-3c1e5a0d3526?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTgzMzgwODF8&ixlib=rb-4.0.3&q=85",
  "regular": "https://images.unsplash.com/photo-1698047736474-3c1e5a0d3526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTgzMzgwODF8&ixlib=rb-4.0.3&q=80&w=1080",
  "small": "https://images.unsplash.com/photo-1698047736474-3c1e5a0d3526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTgzMzgwODF8&ixlib=rb-4.0.3&q=80&w=400",
  "thumb": "https://images.unsplash.com/photo-1698047736474-3c1e5a0d3526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjA4MzN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTgzMzgwODF8&ixlib=rb-4.0.3&q=80&w=200",
  "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1698047736474-3c1e5a0d3526"
  },
  "links": {
  "self": "https://api.unsplash.com/photos/a-living-room-with-a-white-couch-and-a-tv-aQXuX-_tXrk",
  "html": "https://unsplash.com/photos/a-living-room-with-a-white-couch-and-a-tv-aQXuX-_tXrk",
  "download": "https://unsplash.com/photos/aQXuX-_tXrk/download?ixid=M3w1MjA4MzN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTgzMzgwODF8",
  "download_location": "https://api.unsplash.com/photos/aQXuX-_tXrk/download?ixid=M3w1MjA4MzN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2OTgzMzgwODF8"
  },
  "likes": 0,
  "liked_by_user": false,
  "current_user_collections": [],
  "sponsorship": null,
  "topic_submissions": {},
  "user": {
  "id": "evEFnPanbgY",
  "updated_at": "2023-10-26T15:16:01Z",
  "username": "jalgtvstand",
  "name": "JALG TV Stand",
  "first_name": "JALG",
  "last_name": "TV Stand",
  "twitter_username": null,
  "portfolio_url": "https://jalg.me/",
  "bio": null,
  "location": "Tallinn, Estonia",
  "links": {
  "self": "https://api.unsplash.com/users/jalgtvstand",
  "html": "https://unsplash.com/@jalgtvstand",
  "photos": "https://api.unsplash.com/users/jalgtvstand/photos",
  "likes": "https://api.unsplash.com/users/jalgtvstand/likes",
  "portfolio": "https://api.unsplash.com/users/jalgtvstand/portfolio",
  "following": "https://api.unsplash.com/users/jalgtvstand/following",
  "followers": "https://api.unsplash.com/users/jalgtvstand/followers"
  },
  "profile_image": {
  "small": "https://images.unsplash.com/profile-1697455221077-469b77e71457image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
  "medium": "https://images.unsplash.com/profile-1697455221077-469b77e71457image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
  "large": "https://images.unsplash.com/profile-1697455221077-469b77e71457image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
  },
  "instagram_username": "jalgtvstand",
  "total_collections": 0,
  "total_likes": 0,
  "total_photos": 17,
  "accepted_tos": true,
  "for_hire": false,
  "social": {
  "instagram_username": "jalgtvstand",
  "portfolio_url": "https://jalg.me/",
  "twitter_username": null,
  "paypal_email": null
  }
  }
  }
  ];


function SearchBar({onSearch}) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query,
          client_id: 'irCZM-4JHDCM-WqlguSykBh6tKkOJMI17LAL-AacwxI',
        },
      });

      onSearch(response.data.results);
    } catch (error) {
      console.error('Error searching for images:', error);
    }
  }

  return (
    <div className='search-bar'>
      <input
        type="text"
        value={query}
        onChange={(e) => 
        {
          console.log("e.target.value: ", e.target.value)
          setQuery(e.target.value)
        }}
        placeholder="Search for photos"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
function Gallery({ images }){
  //const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const openModal = (image) => {
    setSelectedImage(image);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };


  // useEffect(() => {
  //   // Gọi API từ Unsplash và lấy dữ liệu hình ảnh
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://api.unsplash.com/photos', {
  //         params: {
  //           client_id: 'irCZM-4JHDCM-WqlguSykBh6tKkOJMI17LAL-AacwxI',
  //           per_page: 30, // Số lượng hình ảnh bạn muốn lấy
  //         },
  //       });

  //       // Lấy dữ liệu hình ảnh từ phản hồi API
  //       const imageArray = response.data.map(image => ({
  //         id: image.id,
  //         regularImageUrl: image.urls.regular,
  //         alt: image.alt_description,
  //       }));
  //       setImages(imageArray);
  //     } catch (error) {
  //       console.error('Error fetching data from Unsplash:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); // useEffect chạy khi component được mount lần đầu
  console.log(images)

  return (
    
    <div className="gallery">
      {images.map(image => (
        <div key={image.id} className="gallery-item">
          <img src={image.urls.thumb} alt={image.alt_description} onClick={() => openModal(image)} />
        </div>
      ))}
      {selectedImage && <Modal image={selectedImage} onClose={closeModal} />} 
    </div>
    
  );

}

function Modal({ image, onClose }) {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.urls.full} alt={image.alt_description} />
      </div>
    </div>
  );
}


export default function App() {

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  }
  return <>
  <SearchBar onSearch={handleSearch} />
  <Gallery images={searchResults} />
  </>;
}

