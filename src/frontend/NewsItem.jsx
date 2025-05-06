import image from '../assets/image.png';

const NewsItem = ({
  title = "No Title",
  description,
  src,
  url,
  category = "General",
  source = "Unknown"
}) => {
  const fallbackDescription = `This is the news about ${title}`;
  const displayDescription = description
    ? description.slice(0, 120) + (description.length > 120 ? "..." : "")
    : fallbackDescription;

  return (
    <div
      className="card bg-dark text-light mb-4 mx-3 shadow"
      style={{ maxWidth: "360px", borderRadius: "12px", overflow: "hidden" }}
    >
      <img
        src={src || image}
        alt="News Thumbnail"
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title text-truncate" title={title}>
          {title.slice(0, 60)}
        </h5>
        <p className="card-text" style={{ fontSize: "0.95rem" }}>
          {displayDescription}
        </p>
        <div className="mb-3 d-flex flex-wrap gap-2">
          <span className="badge bg-info text-dark">{category}</span>
          <span className="badge bg-secondary">{source}</span>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light btn-sm w-100"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
