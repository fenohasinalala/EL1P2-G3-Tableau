export default function Recherche({filterText,onFilter}) {
  
  return (
<div className="form-outline">
  <input
    type="search"
    id="form1"
    className="form-control"
    placeholder="Search..."
    aria-label="Search"
    value={filterText}
    onChange={onFilter}
  />
</div>
  )
};
