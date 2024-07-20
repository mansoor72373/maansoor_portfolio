import React from 'react';

const Blog = () => {
  // Sample blog posts data with real links
  const blogPosts = [
    {
      title: "Understanding React Hooks",
      excerpt: "Dive into the world of React Hooks and learn how they can simplify your component logic.",
      date: "July 10, 2024",
      link: "https://dev.to/johnnyk/react-hooks-a-comprehensive-beginners-guide-3bgc" // Replace with actual link
    },
    {
      title: "A Guide to Tailwind CSS",
      excerpt: "Discover how Tailwind CSS can help you build beautiful and responsive designs quickly.",
      date: "June 25, 2024",
      link: "https://www.material-tailwind.com/blog/how-to-learn-tailwind-css" // Replace with actual link
    },
    {
      title: "Best Practices for Front-End Development",
      excerpt: "Explore the best practices and tips for developing efficient and maintainable front-end applications.",
      date: "May 30, 2024",
      link: "https://dev.to/akshu3011/mastering-frontend-development-essential-skills-and-best-practices-2741" // Replace with actual link
    }
  ];

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Blog</h2>
      <div className="max-w-4xl mx-auto">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <p className="text-gray-500 mb-4">{post.date}</p>
            <a href={post.link} className="text-blue-600 hover:text-blue-800 font-medium" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
