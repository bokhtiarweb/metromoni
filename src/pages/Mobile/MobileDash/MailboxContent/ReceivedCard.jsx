export default function ReceivedCard({ user, matched }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 block sm:hidden">
      {/* Profile Header */}
      <div className="flex gap-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-16 h-16 rounded-md object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.id}</p>
          <p className="text-sm text-gray-600">
            {user.details} <span className="text-red-600">{matched}</span>
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-3 text-gray-700 text-sm">
        <div className="flex items-center gap-1"></div>
        <div className="flex items-center gap-1"></div>
        <div className="flex items-center gap-1 bg-yellow-100">Received on 1-1-2025</div>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi reiciendis modi, nemo doloribus ....</p>
      </div>
    </div>
  );
}
