import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr/>

      <ChannelRow 
        image="https://avatars0.githubusercontent.com/u/42891619?s=400&u=11a9777eb27754f44f0727e39949a894ba58f404&v=4"
        channel="Aayush Garg"
        verified
        subs="69k"
        noOfVideos="3007"
        description="Full Stack Developer from NSIT"
      />
      <hr/>

      <VideoRow 
        views="1.04M"
        subs="69k"
        description="Full Stack Developer from NSIT"
        timestamp="50 seconds ago"
        channel="Aayush garg"
        title="American Express"
        image="https://avatars0.githubusercontent.com/u/42891619?s=400&u=11a9777eb27754f44f0727e39949a894ba58f404&v=4"
      />
      <VideoRow 
        views="1.04M"
        subs="69k"
        description="Full Stack Developer from NSIT"
        timestamp="50 seconds ago"
        channel="Aayush garg"
        title="American Express"
        image="https://avatars0.githubusercontent.com/u/42891619?s=400&u=11a9777eb27754f44f0727e39949a894ba58f404&v=4"
      />
      <VideoRow 
        views="1.04M"
        subs="69k"
        description="Full Stack Developer from NSIT"
        timestamp="50 seconds ago"
        channel="Aayush garg"
        title="American Express"
        image="https://avatars0.githubusercontent.com/u/42891619?s=400&u=11a9777eb27754f44f0727e39949a894ba58f404&v=4"
      />
      <VideoRow 
        views="1.04M"
        subs="69k"
        description="Full Stack Developer from NSIT"
        timestamp="50 seconds ago"
        channel="Aayush garg"
        title="American Express"
        image="https://avatars0.githubusercontent.com/u/42891619?s=400&u=11a9777eb27754f44f0727e39949a894ba58f404&v=4"
      />
    </div>
  );
}

export default SearchPage;
