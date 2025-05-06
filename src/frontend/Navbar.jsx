const Navbar = ({ setCategory }) => {
    const categories = [
      { name: 'All News', value: 'all' },
      { name: 'Business', value: 'business' },
      { name: 'Politics', value: 'politics' },
      { name: 'Arts/Culture/Celebrities', value: 'arts/culture/celebrities' }, // Must match backend key exactly
      { name: 'Sports', value: 'sports' },
    ];
  
    return (
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="badge bg-light text-dark">3 Leaf News</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {categories.map((item) => (
                <li className="nav-item" key={item.value}>
                  <button
                    className="nav-link btn btn-link text-white"
                    onClick={() => setCategory(item.value)}
                    style={{ textDecoration: 'none' }}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  