export type ApiDataType = {
    id: number,
    name: string,
    imgUrl: string,
    area: string,
    description: string,
    group: number,
    price: number,
    rate: number,
    [key: string]: any,
}

export type TicketFormType = {
    name: HTMLInputElement,
    imgUrl: HTMLInputElement,
    area: HTMLInputElement,
    price: HTMLInputElement,
    group: HTMLInputElement,
    rate: HTMLInputElement,
    description: HTMLInputElement,
    [key: string]: HTMLInputElement,
}