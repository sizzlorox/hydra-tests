class Player {

  init(hydra) {
    this.hydra = hydra
    this.instanceID = this.hydra.getInstanceID();
    this.tickAmount = 0;
    setInterval(() => {
      const health = this.hydra.getHealth();
      const currentRSS = Number(health.memory.rss / 1048576).toFixed(2);
      const currentTotal = Number(health.memory.heapTotal / 1048576).toFixed(2);
      const currentUsed = Number(health.memory.heapUsed / 1048576).toFixed(2);
      console.log('------------------------------');
      console.log(`MEM:\n    RSS: ${currentRSS}MB\n    HEAPTOTAL: ${currentTotal}MB\n    HEAPUSED: ${currentUsed}MB\nUPTIME: ${health.uptimeSeconds}`);
      console.log('------------------------------');
    }, 5000);
  }

  messageHandler(message) {
    if (message.typ !== 'tick') {
      return;
    }
    this.tickAmount++;
    console.log(`[TICK] ~> Took ${Number((Date.now() - message.bdy.datetime) / 1000).toFixed(2)} seconds to arrive!`);
    console.log(`[COUNT] ~> Received ${this.tickAmount} ticks!`);
  }

}
module.exports = new Player();
