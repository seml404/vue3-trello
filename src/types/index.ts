export namespace UserSpace {
  export interface Board {
    [key: string]: unknown
    id: number
    title: string
  }
  export interface CardsList {
    [key: string]: unknown
    id: number
    board_id: number
    title: string
    cards: Card[]
  }

  export interface Card {
    [key: string]: unknown
    title: string
    id: number
    card_list_id: number
    classes?: string
  }
  export enum Path {
    HOME = 'home',
    MAIN_BOARD = 'main_board'
  }
}
