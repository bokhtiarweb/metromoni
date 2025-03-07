import { FaRegStar, FaRegCommentDots, FaPaperPlane, FaTrashAlt } from "react-icons/fa";

const ProfileCard = ({ user, activeTat, matched }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 block sm:hidden">
      {/* Profile Header */}
      <div className="flex gap-4">
        <img src={user.image} alt={user.name} className="w-16 h-16 rounded-md object-cover" />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.id}</p>
          <p className="text-sm text-gray-600">{user.details} <span className="text-red-600">{matched}</span></p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-3 text-gray-700 text-sm">
        {activeTat === "shortlist" ? <div className="flex items-center gap-1"><FaTrashAlt></FaTrashAlt> Remove</div> : <div className="flex items-center gap-1">
          <FaRegStar />
          Shortlist
        </div> }
        
        <div className="flex items-center gap-1">
          <FaRegCommentDots />
          Chat Now
        </div>
        <div className="flex items-center gap-1 text-green-500">
          <FaPaperPlane />
          Send Interest
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
