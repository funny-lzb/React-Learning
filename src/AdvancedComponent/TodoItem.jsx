export default function TodoItem({
  id,
  value,
  completed,
  toggleChecked,
  deleteTodo,
}) {
  return (
    <>
      <li className='list-item'>
        <label className='list-item-label'>
          <input
            type='checkbox'
            checked={completed}
            onChange={e => toggleChecked(id, e.target.checked)}
            data-list-item-checkbox
          />
          <span data-list-item-text>{value}</span>
        </label>
        <button data-button-delete onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </li>
    </>
  )
}
