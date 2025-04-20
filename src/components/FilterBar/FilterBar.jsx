import styles from './FilterBar.module.css';
import Tag from '../Tag/Tag';

export default function FilterBar({ filters, onFilterRemove, onClear }) {
  if (filters.length === 0) return null;

  return (
    <div className={styles.filterBar}>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <Tag key={index} isFilter onClick={() => onFilterRemove(filter)}>
            {filter}
          </Tag>
        ))}
      </div>
      <button className={styles.clear} onClick={onClear}>
        Clear
      </button>
    </div>
  );
}