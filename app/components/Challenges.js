import React from "react";
import BookItem from "./BookItem";
import styled from "styled-components";

const Library = styled.ul`
  background-color: #e6e6e6;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

var data = [
  "A book wit more than 500 pages",
  "A memoir",
  "A classic romance",
  "A book you can finish in a day",
  "A book that became a movie",
  "A book with antonymus in the title",
  "A book published this year",
  "A book set somewhere you've always wanted to visit",
  "A book with a number in the title",
  "A book that came out the year you were born",
  "A book with nonhuman characters",
  "A book with bad rewiews",
  "A book written by someone under 30",
  "A triology",
  "A funny book",
  "A book from your childhood",
  "A book by a female author",
  "A book with a love triangle",
  "A mystery of thriller",
  "A book set in the future",
  "A book with a one-word title",
  "A book set in high school",
  "A book of short stories",
  "A book with color in the title",
  "A book se int a different country",
  "A book that made you cry",
  "A nonfiction book",
  "A book with magic",
  "A popular author's first book",
  "A graphic novel",
  "A book from an author you love that you haven't read yet",
  "A book by an author you've never read before",
  "A book a friend recdommended",
  "A book you own but never have read",
  "A pulitzer price- winning book",
  "A book that place in your hometown",
  "A book based on a true story",
  "A book that was originally written in a different language",
  "A book at the bottom of your to-rea list",
  "A book set during christmas",
  "A book your mom loves",
  "A book written by an author with your same initials",
  "A book that scares you",
  "A play",
  "A book more than 100 years old",
  "A banned book",
  "A book based entirely on it's cover",
  "A book based or turned into a TV show",
  "A book you were supposed to read in school but didn't",
  "A book you started but never finished"
];

function Books(props) {
  return (
    <Library>
      {props.data.map(function(data) {
        return <BookItem title={data} />;
      })}
    </Library>
  );
}

class Challenges extends React.Component {
  render() {
    return <Books data={data} />;
  }
}

export default { Challenges };
