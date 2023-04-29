/**
 * Queue structure
 */
class Queue<T = unknown> {
    /**
     * Queue storage
     */
    private storage: T[] = []

    /**
     * Add item to queue
     * @param item item to add to queue
     */
    public enqueue(item: T): void {
        this.storage.push(item)
    }

    /**
     * Take item from queue
     * @returns queue item
     */
    public dequeue(): T | undefined {
        return this.storage.shift()
    }

    /**
     * Queue size
     */
    public get size(): number {
        return this.storage.length
    }

    /**
     * is empty queue
     */
    public get isEmpty(): boolean {
        return this.size === 0
    }
}

export default Queue
