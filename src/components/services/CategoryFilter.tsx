interface CategoryFilterProps<T extends string> {
  categories: { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
}

export function CategoryFilter<T extends string>({
  categories,
  active,
  onChange,
}: CategoryFilterProps<T>) {
  return (
    <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Filter services by category">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={active === cat.id}
          onClick={() => onChange(cat.id)}
          className={[
            'rounded-full border px-4 py-1.5 text-xs font-medium transition-colors duration-150',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
            active === cat.id
              ? 'border-navy bg-navy text-white'
              : 'border-border-subtle bg-surface text-text-muted hover:border-gold hover:text-text-primary',
          ].join(' ')}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
