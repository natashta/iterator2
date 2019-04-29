export default class Team {
  constructor() {
    this.hero = [
      {
        name: 'Bowman', health: 50, level: 1, type: 'Bowman', attack: 25, defence: 25,
      },
      {
        name: 'Swordsman', health: 50, level: 1, type: 'Swordsman', attack: 40, defence: 10,
      },
      {
        name: 'Magician', health: 100, level: 1, type: 'Magician', attack: 25, defence: 25,
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
