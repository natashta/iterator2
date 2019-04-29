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
    const sorted = (heroA, heroB) => {
      const strongA = heroA.health + heroA.defence;
      const strongB = heroB.health + heroB.defence;
      const abilA = heroA.attack + heroA.damage;
      const abilB = heroB.attack + heroB.damage;
      if (strongA === strongB) { return abilB - abilA; }
      return strongA - strongB;
    };
    const hero = this.hero.sort(sorted);
    let current = 0;
    return {
      next() {
        if (current < hero.length) {
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
