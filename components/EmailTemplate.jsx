export default function EmailTemplate({ message }) {
  return (
    <div>
      <h2 className="text-2xl bg-blue-500 p-2">Welcome to the Event</h2>
      <div className="text-xl">{message}</div>
    </div>
  );
}
