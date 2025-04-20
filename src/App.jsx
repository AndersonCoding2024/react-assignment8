import { useState } from 'react';
import data from '../data.json';
import FilterBar from './components/FilterBar/FilterBar';
import JobCard from './components/JobCard/JobCard';
import './style.css';

export default function App() {
  const [filters, setFilters] = useState([]);

  const addFilter = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filterToRemove) => {
    setFilters(filters.filter((filter) => filter !== filterToRemove));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = data.filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => jobTags.includes(filter));
  });

  return (
    <div className="app">
      <header className="header"></header>
      <main className="main">
        <FilterBar
          filters={filters}
          onFilterRemove={removeFilter}
          onClear={clearFilters}
        />
        <div className="job-listings">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onFilterAdd={addFilter} />
          ))}
        </div>
      </main>
    </div>
  );
}