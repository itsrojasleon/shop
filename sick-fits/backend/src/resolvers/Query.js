const Query = {
  dogs(parentValue, args, ctx, info) {
    return [{name: 'Snickers'}, {name: 'Sunny'}]
  }
};

module.exports = Query;
