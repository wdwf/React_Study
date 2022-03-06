import { useState } from 'react';

import { SiProtocolsdotio } from 'react-icons/si';
import { BsPencil } from 'react-icons/bs';
import { Card } from '../../components/Card';

import imageUser from '../../assets/images/user.png'

import { 
  Container, Header, ImageUser,
  NameUser, Title, SectionCards,
  Fields
} from './styles'

function Home() {

  const [ taskText, setTaskText ] = useState('');
  const [ tasks, setTasks ] = useState<string[]>([]);

  function createTask() {

    if(taskText.length === 0) {
      return
    }
    setTasks([ ...tasks, taskText ]);
    setTaskText('');
  }

  function handleChange(event:any) {
    setTaskText(event.target.value);
  }

  return (
    <Container>
      <Header>
        <ImageUser>
          <img src={imageUser} />
        </ImageUser>
        <NameUser>
          <h2>User Study</h2> 
          <SiProtocolsdotio/>
        </NameUser>
      </Header>

      <Title>List</Title>

      <Fields>
        <input 
          className='fieldInput' 
          type="text"
          value={taskText}
          onChange={handleChange}
        />
        <button 
          className='btnSave'
          onClick={createTask}
        >
          <BsPencil/>
        </button>
      </Fields>

      <SectionCards>
        <Card title="Importante" type='attention' content={'Card de atenção!!!'}/>
        {
          tasks.map((task, index) => <Card key={index} title="Task" content={task}/>)
        }
      </SectionCards>
    </Container>
  )
}

export default Home;