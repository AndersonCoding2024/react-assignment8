import styles from './Tag.module.css';

export default function Tag({ children, onClick, isFilter = false }) {
  return (
    <div className={`${styles.tagWrapper} ${isFilter ? styles.filterTagWrapper : ''}`}>
      <button 
        className={`${styles.tag} ${isFilter ? styles.filterTag : ''}`}
        onClick={onClick}
      >
        {children}
      </button>
      {isFilter && (
        <button className={styles.removeBtn} onClick={onClick} aria-label="Remove">
          × 
        </button>
      )}
    </div>
  );
}