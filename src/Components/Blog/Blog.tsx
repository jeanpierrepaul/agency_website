import { useRef } from 'react';
import { Post } from './Post';
import './blog.css';
import { useInView } from 'framer-motion';
import { useData } from '../../context/DataContext';
import img1 from '../../images/1.jpg';

export const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { blogPosts } = useData();
  
  // Filtrer uniquement les articles publiés
  const publishedPosts = blogPosts.filter(post => post.published).slice(0, 3);

  return (
    <section id="blog" className="blog" ref={ref}>
      <div
        className="container"
        style={{
          transform: isInView ? 'none' : 'translateY(100%)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.5s ease-out 0.2s',
        }}
      >
        <div className="blog__top-content">
          <h6 className="subtitle">Notre Blog</h6>
          <h2>
            Découvrez nos
            <span className="highlight"> dernières publications</span>
          </h2>
        </div>
        <div className="blog__wrapper">
          {publishedPosts.map((post) => (
            <Post
              key={`BlogPost-${post.id}`}
              title={post.title}
              category={post.category}
              description={post.excerpt}
              thumbnail={post.image || img1}
              link="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
