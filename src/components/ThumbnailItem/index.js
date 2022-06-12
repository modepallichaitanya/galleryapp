// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, clickItem} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const imageClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickButton = () => {
    clickItem(id)
  }

  return (
    <li className="image-list">
      <button type="button" className="image-button" onClick={onClickButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imageClassName}
        />{' '}
      </button>
    </li>
  )
}

export default ThumbnailItem
