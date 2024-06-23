import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; // component de key aleatoria



import { Container, TodoList, Input, Button, ListItem, Trash, Check } from './styles';


function App() {
  // codigo javascript
  const [list, setlist] = useState([]);
  const [inputTask, setInputTask] = useState('');
  

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if(inputTask){
      setlist([...list, { id: uuid(), task: inputTask, done: false }]);
    }
    // utilizacao de spread operator para adicionar mais posicoes no array em vez de so alterar o unico item do array
  }

    function finalizarTarefa(id) {
      const newList = list.map(item => 
        item.id === id ? { ...item, finished: !item.finished } : item
      );
      setlist(newList);
    }
 
    function removeItem(id){
      const newList = list.filter(item =>
      item.id !== id
        );
        setlist(newList);
    }


  //codigo html
  return (
    <Container>
      <TodoList>
        <h1>Lista de Tarefas</h1>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer" />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>
        <ul>
          {
            list.length > 0 ?  (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => removeItem(item.id)}/>
              </ListItem>
            ))): (
              <h3>Não há Itens na lista</h3>
            )
          }
        </ul>
      </TodoList>
    </Container>
  )
}

export default App
