export type StockData = {
  name: string;
  symbol: string;
  price: number;
  time: string;
};

const initialStockValue: StockData = {
  name: "dsafd",
  symbol: "sddasa",
  price: 20,
  time: "2020",
};

export default class Store {
  constructor() {}

  #state = initialStockValue;

  returnStockInfo() {
    const oldStockValue = this.#getState();
    const newStockValue = this.#getNewStockValue(oldStockValue);
    this.#saveState(newStockValue);
    return newStockValue;
  }

  #getNewStockValue(state: StockData) {
    // Copy the previous state so React gets a new reference each update.
    const newState = { ...state };
    // Get the current Time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update State
    newState.price = this.#randomNumber(4);
    newState.time = `${hours}:${minutes}:${seconds}`;
    return newState;
  }

  #randomNumber(max: number) {
    const decimalPoints = 100;
    return Math.floor(Math.random() * (max * decimalPoints)) / 100;
  }

  #getState() {
    return this.#state;
  }
  #saveState(state: StockData) {
    const newState = state;
    this.#state = newState;
  }
}
