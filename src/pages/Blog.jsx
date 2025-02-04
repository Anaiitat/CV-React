import React from "react";
import CardBlog from "../components/CardBlog"

const Blog = () => {

  return (
    <main>
      <div className="banner">
        
      </div>
      <section className="container my-5">
        <div className="text-center">
          <h1 className="text-uppercase">Blog</h1>
          <p>Retrouvez ici quelques articles sur le développement web.</p>
          <div className="custom-border m-auto"></div>
        </div>
      <CardBlog/>
      </section>
    </main>
  );
};

export default Blog;
