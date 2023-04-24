import "./homeBlog.css"
import { forwardRef } from "react";


const HomeBlog=forwardRef((props, ref) => {
  return (
    <div className="home-blog-wrapper" ref={ref}>
      <h1>Blog & News</h1>
      <div className="home-blog-sections">
        <div className="home-blog">
          <img src="images/catprofile.jpg"/>
          <div className="home-blog-info">
            <h2>This is the blog heading</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            <button>Read more...</button>
          </div>
        </div>
        <div className="home-blog">
          <img src="images/catprofile.jpg"/>
          <div className="home-blog-info">
            <h2>This is the blog heading</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            <button>Read more...</button>
          </div>
        </div>
        <div className="home-blog">
          <img src="images/catprofile.jpg"/>
          <div className="home-blog-info">
            <h2>This is the blog heading</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            <button>Read more...</button>
          </div>
        </div>
        <div className="home-blog">
          <img src="images/catprofile.jpg"/>
          <div className="home-blog-info">
            <h2>This is the blog heading</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            <button>Read more...</button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default HomeBlog;