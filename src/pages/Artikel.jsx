import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Desain from '../assets/image/Desainmarketing.jpg';
import Foto from '../assets/image/Fotography.jpg';
import Video from '../assets/image/Videography.jpg';
import James from '../assets/Autor/James.jpg';
import Robert from '../assets/Autor/Robert.jpg';
import Brian from '../assets/Autor/Brian.jpg';
import iconArticle from '../assets/Article.svg'
import './artikel.css';

const Article = () => {
  const blogCategories = [
    {
      category: 'Design Marketing & Architecture',
      posts: [
        {
          id: '1',
          image: Desain,
          createdAt: 'August 18, 2022',
          title: 'Design dan Marketing: Pengertian',
          deskripsi: 'Marketing merupakan sebuah kegiatan bisnis untuk mempromosikan atau menjual produk dan service termasuk didalamnya kegiatan riset dan advertising...',
          author: 'James',
          authorImage: James,  // Add specific author image path
        },
      ],
    },
    {
      category: 'Fotography',
      posts: [
        {
          id: '1',
          image: Foto,
          createdAt: 'July 14, 2022',
          title: 'Fotography: Pengertian',
          deskripsi: 'Fotography berasal dari kata Yunani "photos" untuk cahaya dan "grafo" untuk melukis...',
          author: 'Robert',
          authorImage: Robert,  // Add specific author image path
        },
      ],
    },
    {
      category: 'Videography',
      posts: [
        {
          id: '1',
          image: Video,
          createdAt: 'June 21, 2022',
          title: 'Videography: Pengertian',
          deskripsi: 'Kata "Videography" berasal dari kata video yang dalam bahasa latin berarti "saya melihat" dan graphy yang berarti menulis menggunakan media cahaya...',
          author: 'Alice',
          authorImage: Brian,  // Add specific author image path
        },
      ],
    },
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const postsPerPage = 1;
  const currentPosts = blogCategories[currentCategoryIndex].posts.slice(0, postsPerPage);

  return (
    <div className="catalog-container">
      <div className="logo-container">
          <img src={iconArticle} alt="Logo" className="logo" />
        </div>
      <div className="header">
        <h1>Article & Learning</h1>
      </div>
      <p className="description">
        VisioBlend, menawarkan fitur Article & Learning yang bermanfaat bagi masyarakat untuk dapat menjelajahi berbagai artikel dan materi pembelajaran tentang ilmu desain, photography dan videography.
      </p>
      {blogCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="category-section">
          <h2>{category.category}</h2>
          <div className="content-wrap">
            {currentPosts.map((post) => (
              <NavLink to={`/detailarticle`} key={post.id} className="blog">
                <div className="blog-content">
                  <div className="image-wrapper">
                    <img src={post.image} alt={post.title} className="image" />
                    <div className="author-date">
                      <img
                        className="author-img"
                        src={post.authorImage}
                        alt={post.author}
                      />
                      <div className="author-info">
                        <p className="author-name">{post.author}</p>
                        <p className="date">{post.createdAt}</p>
                      </div>
                    </div>
                  </div>
                  <div className="post-info">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-desc">{post.deskripsi}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
          <section className="pagination">
            <div className="page-number">
              {[...Array(Math.ceil(category.posts.length / postsPerPage)).keys()].map((page) => (
                <div
                  onClick={() => setCurrentCategoryIndex(categoryIndex)}
                  key={page}
                  className={page === currentCategoryIndex ? "selected-number" : ""}
                >
                  <span>{page + 1}</span>
                </div>
              ))}
              <div className="next">next</div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Article;
