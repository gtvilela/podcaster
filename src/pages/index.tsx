import React, { useEffect } from "react";

export default function Home(props) {

  // Modo SPA - Utilizando o hook do React, porém o brownser não espera a chamada da API para indexação
  // useEffect(() => {
  //   fetch('http://localhost:3333/episodes')
  //         .then(response => response.json())
  //         .then(data => console.log(data))
  // }, [])

  return (
    <div>
      <h1>Index</h1>
      <span>{JSON.stringify(props.episodes)}</span>
    </div>
  )
}

//Modo SSG - Só funciona em producão, ou seja, tem que buildar o app para ver o SSG funionando
// Modo SSG - Você pode programar de quanto em quanto tempo a api é chamada novamene
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()
  
  return { props: {
        episodes: data,
      },
      revalidate: 60 * 60 * 8,
    }
  }

//Modo SSR - Chama a api da função toda vez que o usuário acessar essa página
// export async function getServerSideProps() {
// const response = await fetch('http://localhost:3333/episodes')
// const data = await response.json()

// return { props: {
//       episodes: data,
//     } 
//   }
// }