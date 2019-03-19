/**
 * Created by GYL on 2019/1/22 Description: videoTest
 */
import React, { Component } from 'react';
import cyberplayer from './cyberplayer.js';

class VideoPlay extends Component {
  componentDidMount(){
    let {ID, ...items} = this.props;
    this.player = cyberplayer(ID).setup({
      ...items,
      autostart: true,
      stretching: "exactfit",
      volume: 100,
      controls: true,
      controlbar: {
        barLogo: false
      },
      rtmp: {
        reconnecttime: 5, // rtmp直播的重连次数
        bufferlength: 1 // 缓冲多少秒之后开始播放 默认1秒
      },
      ak: "19cb66c2bc7748a281e0f4ef6788ebc2" // 公有云平台注册即可获得accessKey
    });
  };
  componentWillUnmount(){
    this.player.remove();
  }
  render(){
    let t = this;
    let {ID} = t.props;
    return(
      <div id={ID} />
    )
  }
}
export default VideoPlay;
