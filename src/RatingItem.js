import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const RatingItem = ({ icon, onClick, onMouseEnter, onMouseLeave, color = 'black' }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} color={color} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
    </div>
  )
}

export default RatingItem
