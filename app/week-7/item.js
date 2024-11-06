export default function Item({ item }) {
  return (
      <li style={{ padding: '5px 0', borderBottom: '1px solid #ccc' }}>
          {item.name} - {item.quantity} ({item.category})
      </li>
  );
}
