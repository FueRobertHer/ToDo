import React, { useState } from 'react'

import TrashItem from './trashItem'

function Trash({update, listItems, setListItems, trashItems, setTrashItems}) {
  function returnToList(idx) {
    const newList = [...listItems]
    const newTrash = [...trashItems]

    newList.push(newTrash.splice(idx, 1))

    update(setListItems(newList))
    update(setTrashItems(newTrash))
  }

  function removeFromTrash(idx) {
    const newTrash = [...trashItems]

    newTrash.splice(idx, 1)

    update(setListItems(listItems))
    update(setTrashItems(newTrash))
  }

  function getItems() {
    return (
      <ul>
        {trashItems.map((item, idx) => {
          return (
            <TrashItem 
              item={item} 
              idx={idx}
              returnToList={returnToList}
              removeFromTrash={removeFromTrash}
            />
          )
        })}
      </ul>
    )
  }

  return (
    <div>
      <h2>
        <span>Remove</span> 
      </h2>

      <div>
        {getItems()}
      </div>

    </div>
  )
}

export default Trash