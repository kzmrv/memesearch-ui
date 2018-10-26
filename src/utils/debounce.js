export default (func, delay = 300) => {
  let isAlreadyExecuted = false;
  let _args;
  let context;

  function debouncedFunc (...args) {
    if (isAlreadyExecuted) {
      _args = args;
      context = this;
      return;
    }

    func.apply(this, args);

    isAlreadyExecuted = true;

    setTimeout(
      () => {
        isAlreadyExecuted = false;
        if (_args) {
          debouncedFunc.apply(context, _args);
          context = null;
          _args = null;
        }
      },
      delay
    );
  }

  return debouncedFunc;
}
