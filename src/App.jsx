import { ReactFlow, Background, Controls, Panel, applyNodeChanges, applyEdgeChanges} from 'reactflow';
import 'reactflow/dist/style.css';
import './App.css'
import { useCallback, useState } from 'react';
import DnDFlow from './DnDFlow/DnDFlow'

function App() {
  

  return (
    
    <>
    <DnDFlow />
    </>
  )
}

export default App
