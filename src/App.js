import React, { useState } from 'react'
import './App.css';

import List from './list'
import Trash from './trash'

function App() {
  const [history, setHistory] = useState([])
  const [listItems, setListItems] = useState([])
  const [trashItems, setTrashItems] = useState([])

  function recordHistory() {
    const newHistory = [...history]
    const list = [...listItems]
    const trash = [...trashItems]
    const now = {list: list, trash: trash}
    newHistory.push(now)
    setHistory(newHistory)
  }

  function update(callback) {
    recordHistory()
    return callback
  }

  function undo() {
    if (!history[0]) return
    
    const prevHistory = [...history]
    const prev = prevHistory.pop()

    const prevList = [...prev.list]
    const prevTrash = [...prev.trash]

    setListItems(prevList)
    setTrashItems(prevTrash)
    setHistory(prevHistory)
  }

  return (
    <div className="App">
      <button className='undo' onClick={undo}>
          Undo
      </button>

      <List 
        className='col'
        update={update} 
        listItems={listItems} 
        setListItems={setListItems}
        trashItems={trashItems}
        setTrashItems={setTrashItems}
      />

      <Trash 
        className = 'col'
        update={update} 
        listItems={listItems} 
        setListItems={setListItems}
        trashItems={trashItems}
        setTrashItems={setTrashItems}
      />
    </div>
  );
}

export default App;
