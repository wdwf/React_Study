import { 
  Container, Title, 
} from './styles';

type CardProps = {
  type?: 'default' | 'attention' | 'success';
  title: string;
  content: string
}

export function Card({ type='default', title, content }:CardProps) {
  return(
    <Container type={type}>
      <Title>{ title }</Title>
      <p>{ content }</p>
    </Container>
  )
}

