import { useEffect, useRef, useState } from "react"
import RatingItem from "./RatingItem"
import { useHover } from '@react-hooks-library/core'
import PropTypes from 'prop-types';

Rating.propTypes = {
  maxRating: PropTypes.number, 
  inactiveIcon: PropTypes.object, 
  activeIcon: PropTypes.object, 
  color: PropTypes.string, 
  size: PropTypes.string, 
  onRated: PropTypes.func
}

export default function Rating ({ maxRating = 5, inactiveIcon, activeIcon, color = 'black', size = 'sm', onRated }) {
  const wrapperRef = useRef(null)
  const isHovered = useHover(wrapperRef)
  const [rating, setRating] = useState(0)
  const [tempRating, setTempRating] = useState(0)

  useEffect(() => {
    if (!isHovered) setTempRating(0)
  }, [isHovered])

  const handleClick = i => {
    setRating(i + 1)
    onRated(i + 1)
    setTempRating(0)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} ref={wrapperRef}>
      {Array.from({ length: maxRating }, (_, i) => {
        return (
          <RatingItem 
            icon={(tempRating || rating) >= i + 1 ? activeIcon : inactiveIcon } 
            key={i} 
            color={color}
            size={size}
            onMouseEnter={() => setTempRating(i + 1)}
            onClick={() => handleClick(i)}
          />
        )
      })}
    </div>
  )
}
