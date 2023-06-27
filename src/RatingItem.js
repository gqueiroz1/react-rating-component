import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const RatingItem = ({ icon, onClick, onMouseEnter, onMouseLeave, color, size }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} size={size} color={color} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
    </div>
  )
}

export default RatingItem
