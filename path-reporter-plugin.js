const visitor = {
  Program() {
    console.log(this.file.opts.filename);
  }
};

module.exports = function (babel) {
  return {
    visitor
  };
};
