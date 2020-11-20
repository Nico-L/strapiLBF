module.exports = async (ctx, next) => {
const { id } = ctx.params;
  strapi.log.debug("id from ctx", ctx.state.user.id)
strapi.log.debug("id from query", id)
  strapi.log.debug("test des deux", parseInt(ctx.state.user.id, 10) === parseInt(id,10))
  if (parseInt(ctx.state.user.id,10) === parseInt(id,10)) {
    // Go to next policy or will reach the controller's action.
    return await next();
  }
  return ctx.unauthorized(`You are not authorized to delete this user`);
};
