class Player {
  constructor(private name: string) {}

  get playerName(): string {
    return this.name;
  }

  set playerName(newValue: string) {
    this.name = newValue;
  }
}

let playerOne = new Player('Rachel');
playerOne.playerName = 'Alice';