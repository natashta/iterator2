import Team from '../src/js/function';

const team = new Team();
const it = team[Symbol.iterator]();

test('First', () => {
  const expected = {
    name: 'Bowman', health: 100, level: 1, type: 'Bowman', defence: 50, attack: 8, damage: 8,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Second', () => {
  const expected = {
    name: 'Swordsman', health: 100, level: 1, type: 'Swordsman', defence: 50, attack: 5, damage: 5,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Third', () => {
  const expected = {
    name: 'Magician', health: 100, level: 1, type: 'Magician', defence: 60, attack: 10, damage: 10,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Last one', () => {
  const expected = true;
  const hero = it.next();
  const received = hero.done;
  expect(received).toEqual(expected);
});
