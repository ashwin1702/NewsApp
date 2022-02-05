import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let   {title,description,imageUrl,newsUrl,author,date} = this.props;
    return (
      <div>
        <div className="card" >
  <img src={!imageUrl?"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/knmgthhrb0jgmwig_1643383398.jpeg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank"  className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem

