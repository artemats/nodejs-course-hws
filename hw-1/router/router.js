export function router(args) {
  const [command, ...rest] = args;
  switch (command) {
    case 'add':
      return import('../controllers/addController.js').then((module) =>
        module.handle(rest)
      );
    case 'list':
      return import('../controllers/listController.js').then((module) =>
        module.handle(rest)
      );
    case 'done':
      return import('../controllers/doneController.js').then((module) =>
        module.handle(rest)
      );
    case 'delete':
      return import('../controllers/deleteController.js').then((module) =>
        module.handle(rest)
      );
    case 'update':
      return import('../controllers/updateController.js').then((module) =>
        module.handle(rest)
      );
    case 'stats':
      return import('../controllers/statsController.js').then((module) =>
        module.handle(rest)
      );
  }
}
