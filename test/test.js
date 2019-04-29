import Team from '../src/js/function';

const team = new Team();
const it = team[Symbol.iterator]();

test('First', () => {
  const expected = {
    name: 'Swordsman', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Second', () => {
  const expected = {
    name: 'Bowman', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25,
  };
  const hero = it.next();
  const received = hero.value;
  expect(received).toEqual(expected);
});

test('Third', () => {
  const expected = {
    name: 'Magician', health: 100, level: 1, type: 'Magician', attack: 25, defence: 25,
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
