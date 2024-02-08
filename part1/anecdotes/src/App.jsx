import { useState } from 'react';

const AnecdoteDisplay = ({ title, anecdote, votes }) => (
  <div>
    <h2>{title}</h2>
    <p>{anecdote}</p>
    <p>has {votes} vote{votes !==1 ? 's' : ''}</p>
  </div>
);

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const maxVotesIndex = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <AnecdoteDisplay
        title="Anecdote of the day:"
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
      />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleRandomAnecdote} text="Click me and I'll show you an anecdote" />
      <AnecdoteDisplay
        title="Anecdote with the most votes:"
        anecdote={anecdotes[maxVotesIndex]}
        votes={votes[maxVotesIndex]}
      />
    </div>
  );
};

export default App;