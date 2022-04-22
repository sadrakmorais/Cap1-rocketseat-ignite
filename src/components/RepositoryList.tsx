import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import {useState, useEffect} from 'react'

type RepoProps = {
  name: string;
  description: string;
  html_url: string;
}
export function RepositoryList (){
  const [listRepos, setListRepos] = useState<RepoProps[]>([])

  useEffect(()=>{
    fetch('https://api.github.com/users/sadrakmorais/repos')
    .then(response => response.json())
    .then(data => setListRepos(data))
  },[])

 return(
   <section className="repository-list">
     <h1>Lista de Repositorio</h1>
   <ul>
     {
       listRepos &&
       listRepos.map((repo,index) => (
         <RepositoryItem key={index} repository={repo.name} description={repo.description} link={repo.html_url}/>
       )) 
     }

   </ul>
   </section>
 )
}