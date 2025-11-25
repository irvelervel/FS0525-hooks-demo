// useEffect è un altro hook di base di React
import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
// useEffect serve a replicare nei componenti a funzione le classiche
// funzionalità dei metodi di lifecycle dei componenti a classe
// es. componentDidMount e componentDidUpdate
// quale dei metodi di lifecycle andrete a replicare dipende dall'utilizzo
// dell'hook stesso

// DUE REGOLE DEGLI HOOKS

// 1) Potete utilizzare i REACT HOOKS solamente nei componenti React
// a funzione
// 2) L'utilizzo dei REACT HOOKS deve avvenire all'interno del componente
// a funzione ma fuori da cicli/condizioni/altrefunzioni e PRIMA del
// return statement

const EffectExample = function () {
  // anche useEffect va inserito QUI, prima del return e al di fuori
  // di condizioni, cicli, funzioni mie etc.

  const getArtist = () => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/356')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero artista')
        }
      })
      .then((artist) => {
        console.log('Nome artista selezionato:', artist.name)
      })
      .catch((err) => {
        console.log('ERRORE!', err)
      })
  }

  const [name, setName] = useState('Gian')

  //   immaginiamo di voler ricreare un componentDidMount in un componente
  //   a funzione, qualcosa tipo:
  //   componentDidMount(){
  //     this.getArtist()
  //   }
  useEffect(() => {
    getArtist()
  }, []) // un array di dipendenze COMPLETAMENTE VUOTO dà esattamente
  // ZERO MOTIVI allo useEffect per re-invocarsi un'ulteriore volta
  // dopo quella iniziale

  useEffect(getArtist, []) // <-- analoga

  useEffect(() => {
    // questo è un useEffect che re-invoca la funzione ad OGNI RENDER
    // setName('Pupo') <-- loop infinito! perchè setto lo stato e viene
    // automaticamente re-invocato lo useEffect
  })

  //   il secondo parametro di useEffect, se c'è, è sempre UN ARRAY
  //   questo array è detto in gergo "dependencies list"
  //   dentro l'array inserirete tutte le variabili di cui volete
  // "rimanere in ascolto"; ogni volta che una di quelle variabili cambierà
  // valore, il vostro effetto verrà chiamato una ulteriore volta.

  return (
    <>
      <h2 className="text-center">useEffect in React</h2>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <div className="d-flex justify-content-center">
              <Button
                variant="success"
                onClick={() => {
                  setName(name === 'Gian' ? 'Giorgio' : 'Gian')
                }}
              >
                {name}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EffectExample
