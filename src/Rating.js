import { useEffect, useRef, useState } from "react"
import RatingItem from "./RatingItem"
import { useHover } from '@react-hooks-library/core'

const Rating = ({ maxRating, inactiveIcon, activeIcon, color = 'black', size = 'sm', onRated }) => {
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

export default Rating
