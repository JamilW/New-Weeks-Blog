"use client"
import React, { Component } from "react"
import Disqus from "disqus-react"

export default class DisqusComments extends Component {
  render() {
    const disqusShortname = "weeksagenda"
    const disqusConfig = function () {
      this.page.url = "https://localhost:3000/post/$[slug]",
      this.page.identifier = article-id,// Single post id
      this.page.title = article-title // Single post title
    }  
    return (
      <div className="article-container">
{/* 
        <h1>Page Title</h1>

        <p>Page content.</p> */}

        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}