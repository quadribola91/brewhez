export default function Button({ children, ...props }) {
  return (
    <button {...props} className="!bg-blue-600 hover:!bg-blue-700 !text-white">
      {children}
    </button>
  );
}
