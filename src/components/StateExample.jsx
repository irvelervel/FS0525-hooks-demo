// StateExample sarà un componente a FUNZIONE
// in StateExample cercheremo di replicare le funzionalità di STATO
// che tipicamente erano confinate nei componenti a classe

import { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

// per farlo, utilizzeremo un React Hook chiamato "useState()"
// gli hooks in JS sono delle funzioni che cominciano con use****
// per poterli utilizzare al meglio dobbiamo solamente memorizzare le
// DUE REGOLE DEGLI HOOKS

// 1) Potete utilizzare i REACT HOOKS solamente nei componenti React
// a funzione
// 2) L'utilizzo dei REACT HOOKS deve avvenire all'interno del componente
// a funzione ma fuori da cicli/condizioni/altrefunzioni e PRIMA del
// return statement

// Non è detto che in un progetto React ci debbano essere solamente
// componente a funzione con gli hooks; non esistono al momento piani
// per la deprecazione dei componente a classe quindi potete mischiarli
// senza limitazioni nei vostri progetti

// useState è un HOOK che "replica" le funzionalità di STATE e vi permette
// di accedervi anche nei componenti a funzione

// immaginiamo un oggetto "state" in un componente a classe

// state = {
//     loading: true,
//     error: false,
//     activePasta: paste[0],
//     reviews: []
// }

const StateExample = function () {
  // useState serve a creare una "proprietà di stato"
  // immaginiamo di voler creare una proprietà di stato "loading"
  // per un indicatore di caricamento
  const [loading, setLoading] = useState(true)
  // true sarà il valore iniziale di loading
  // setLoading è l'unica funzione in grado di alterare il valore di loading
  const [reviews, setReviews] = useState([])
  // [] sarà il valore iniziale di reviews
  // setReviews è l'unica funzione in grado di alterare il valore di reviews
  const [name, setName] = useState('Gian')

  return (
    <>
      <h2 className="text-center">useState in React</h2>
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

export default StateExample
