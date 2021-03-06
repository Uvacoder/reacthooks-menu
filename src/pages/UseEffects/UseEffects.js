/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";

const UseEffects = () => {
  const [characters, setCharacters] = useState([]);

  /**
   Dentro de nuestro useEffect haremos fetch de
   la API de Rick y Morty, para sacar los personajes.
   Esto en las clases se podría hacer en el método 
   componentWillMount o componentDidMount
 */
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <Flex>
      <Sidebar />
      <Flex display="-ms-grid" textAlign="center" mt="5%">
        <Text
          fontFamily="sans-serif"
          fontSize="72px"
          color="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(149,18,18,1) 94%)"
        >
          UseEffect
        </Text>
        <Flex display="grid" mt="10%">
          <Text color="linkedin.600" fontSize="3xl" margin="auto" width="80%">
            {" "}
            Dentro de nuestro useEffect haremos fetch de la API de Rick y Morty,
            para sacar los personajes. Esto en las clases se podría hacer en el
            método componentWillMount o componentDidMount. En este caso traemos
            el primer elemento de la Api.
          </Text>
          <Flex mt={30} display="-ms-grid" textAlign="center">
            <Text color="tomato">
              La api devolvio a:{" "}
              {characters.map((character) => <h2>{character.name}</h2>).shift()}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UseEffects;
