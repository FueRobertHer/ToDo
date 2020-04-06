import React, { useState } from 'react'

function ListItem({item, idx, removeFromList}) {
  function deleteSelf(e) {
    removeFromList(idx)
  }

  

  return (
    <div>
      <button onClick={deleteSelf}>
        Trash
      </button>

      <span>
        {item}
      </span>
    </div>
  )
}

export default ListItem