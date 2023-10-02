export namespace UserSpace {
  export interface Board {
    id: number
    title: string
  }
  export interface CardsList {
    id: number
    title: string
    cards: Card[]
  }

  export interface Card {
    title: string
    id: number
    classes?: string
  }
}
