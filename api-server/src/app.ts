import Koa from 'koa';

const app = new Koa();

const PORT = 3000;

app.use(async (ctx: Koa.Context) => {
  ctx.body = 'hello koa';
});

app.listen(PORT, () => {
  console.log(`Listening at: ${PORT}`);
});