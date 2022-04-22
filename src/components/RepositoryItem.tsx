import '../styles/cardRepository.scss'


export type RepositoryItemProps = {
  repository: string;
  description: string;
  link: string;
}
export function RepositoryItem ({repository,description,link}: RepositoryItemProps){
 return(

  <li>
    <strong>{repository}</strong>
    <p>{description}</p>
    <a href={link} target='_blank'>Acessar</a>
  </li>

 )
}