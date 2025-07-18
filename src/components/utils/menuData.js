const navItems = [
  {
    label: 'Home',
    link: '/',
    active: true,
    dropdown: [
      { label: 'AI Image Generator', link: 'index.html', active: true },
      { label: 'AI Text Generator', link: 'index-2.html' },
      { label: 'AI Developers Profile', link: 'index-3.html' },
      { label: 'AI Chatbot', link: 'index-4.html' },
    ],
  },
  {
    label: 'About Us',
    link: 'about',
  },
  {
    label: 'Portfolio',
    link: '',
    dropdown: [
      { label: 'Portfolio', link: '/portfolio' },
      { label: 'Portfolio Details', link: 'portfolio-details.html' },
    ],
  },
  {
    label: 'Services',
    link: '',
    dropdown: [
      { label: 'Services', link: '/services' },
      { label: 'Services Details', link: 'services-details.html' },
    ],
  },
  {
    label: 'Blogs',
    link: '#',
    dropdown: [
      { label: 'Blog Standard', link: 'blog-standard.html' },
      { label: 'Blog Grid', link: 'blog.html' },
      { label: 'Blog Right Sidebar', link: 'blog-sidebar.html' },
      { label: 'Blog Details', link: 'blog-details.html' },
    ],
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

export default navItems;
