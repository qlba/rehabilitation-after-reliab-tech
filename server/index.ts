import Koa from 'koa';

function main() {
  const app = new Koa();

  app.use((ctx) => {
    ctx.body = ctx.ip;
  });

  app.listen(3000);
}

main();
