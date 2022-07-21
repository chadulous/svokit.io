import { Server } from "socket.io";

/**
 * @description Contains all svocket config
 */
type Config = {
    mount(io: Server): void,
    out: string | "build" | "out"
}


export default function plugin(): {
    name: 'svocket.io',
    configureServer(server): void
}