export default class Team {
  constructor() {
    this.hero = [
      {
        name: 'Bowman', health: 100, level: 1, type: 'Bowman', defence: 50, attack: 8, damage: 8,
      },
      {
        name: 'Swordsman', health: 100, level: 1, type: 'Swordsman', defence: 50, attack: 5, damage: 5,
      },
      {
        name: 'Magician', health: 100, level: 1, type: 'Magician', defence: 60, attack: 10, damage: 10,
      },
    ];
  }

[Symbol.iterator]() {
  const sorted = (a, b) => {
    const strongA = a.health + a.defence;
    const strongB = b.health + b.defence;
    const abilA = a.attack + a.damage;
    const abilB = b.attack + b.damage;
    if (strongA === strongB) { return abilB - abilA; }
    return strongA - strongB;
  };
    const hero = this.hero.sort(sorted);
    let current = 0;
    const last = hero.length;
    return {
      next() {
        if (current < last) {
          const val = hero[current];
          current += 1;
          return {
            done: false,
            value: val,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
