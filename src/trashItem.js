import React, { useState } from 'react'

function TrashItem({item, idx, returnToList, removeFromTrash}) {
  function returnSelf(e) {
    returnToList(idx)
  }
  
  function deleteSelf(e) {
    removeFromTrash(idx)
  }

  

  return (
    <div>
      <button onClick={returnSelf}>
        Restore
      </button>

      <button onClick={deleteSelf}>
        Trash
      </button>

      <span>
        {item}
      </span>
    </div>
  )
}

export default TrashItem