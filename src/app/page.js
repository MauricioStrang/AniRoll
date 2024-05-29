
import Roulette from '../components/Roulette';  

export default function Home() {

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  return (
    <div>
      <h1>Roulette Game</h1>
      <Roulette items={items} />
    </div>
  );
};