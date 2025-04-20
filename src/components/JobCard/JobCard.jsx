import styles from './JobCard.module.css';
import Tag from '../Tag/Tag';

export default function JobCard({ job, onFilterAdd }) {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  // Sửa đường dẫn logo để dùng ảnh từ thư mục public
  const getLogoPath = (logoPath) => {
    // Chuyển './images/photosnap.svg' → '/images/photosnap.svg'
    return logoPath.replace('./images/', '/images/');
  };

  return (
    <article className={`${styles.card} ${job.featured ? styles.featured : ''}`}>
      <div className={styles.logo}>
        <img 
          src={getLogoPath(job.logo)} 
          alt={job.company}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/images/default.svg'; // fallback nếu ảnh lỗi
            e.target.style.backgroundColor = '#f0f0f0'; 
          }}
        />
      </div>

      <div className={styles.details}>
        <div className={styles.company}>
          <h3>{job.company}</h3>
          {job.new && <span className={styles.new}>NEW!</span>}
          {job.featured && <span className={styles.featuredTag}>FEATURED</span>}
        </div>

        <h2 className={styles.position}>
          <a href="#">{job.position}</a>
        </h2>

        <div className={styles.meta}>
          <span>{job.postedAt}</span>
          <span>•</span>
          <span>{job.contract}</span>
          <span>•</span>
          <span>{job.location}</span>
        </div>
      </div>

      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <Tag key={index} onClick={() => onFilterAdd(tag)}>
            {tag}
          </Tag>
        ))}
      </div>
    </article>
  );
}
