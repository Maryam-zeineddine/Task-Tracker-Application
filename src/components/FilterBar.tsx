import type { FilterType } from "../types";

interface FilterBarProps{
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const FILTERS: {label: string; value: FilterType}[] = [
    {label: 'All', value: 'all'},
    {label: 'completed', value: 'completed'},
    {label: 'Incomplete', value: 'incomplete'},
];

function FilterBar({currentFilter, onFilterChange}: FilterBarProps){
    return(
        <div className="filter-bar">
            {FILTERS.map((f) => (
                <button 
                 key={f.value}
                 className={currentFilter === f.value ? 'active' : ''}
                 onClick={() => onFilterChange(f.value)}>
                    {f.label}
                </button>            
            ))}
        </div>
    );
}

export default FilterBar;