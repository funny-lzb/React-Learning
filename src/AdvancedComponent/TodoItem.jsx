export default function TodoItem({
  id,
  value,
  completed,
  toggleComplete,
  handleDelete,
}) {
  return (
    <>
      <li className='list-item'>
        <label className='list-item-label'>
          <input
            type='checkbox'
            checked={completed}
            onChange={e => toggleComplete(id, e.target.checked)}
            data-list-item-checkbox
          />
          <span data-list-item-text>{value}</span>
        </label>
        <button data-button-delete onClick={() => handleDelete(id)}>
          Delete
        </button>
      </li>
    </>
  )
}
