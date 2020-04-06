import React, { useState } from 'react'

import ListItem from './listItem'

function List({update, listItems, setListItems, trashItems, setTrashItems}) {
  const [newItem, setNewItem] = useState('')

  function updateItem(e) {
    setNewItem(e.target.value)
  }
  
  function addToList(e) {
    if (newItem === '') return

    if (e.key === 'Enter') {
      const newList = [...listItems]
      newList.push(newItem)
      update(setListItems(newList))

      e.target.value = ''
      setNewItem('')
    }
  }

  function removeFromList(idx) {
    const newList = [...listItems]
    const newTrash = [...trashItems]

    newTrash.push(newList.splice(idx, 1))

    update(setListItems(newList))
    update(setTrashItems(newTrash))
  }

  function getItems() {
    return (
      <ul>
        {listItems.map((item, idx) => {
          return (
            <ListItem item={item} idx={idx} removeFromList={removeFromList}/>
          )
        })}
      </ul>
    )
  }

  return (
    <div>
      <h2>
        To do
      </h2>

      <div>
        {getItems()}

        <input onChange={updateItem} onKeyDown={addToList} placeholder='Add new item'/>
      </div>

    </div>
  )
}

export default List