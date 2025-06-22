export function parseArgs(argv, keys) {
  const res = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--') && keys.includes(argv[i].slice(2))) {
      res[argv[i].slice(2)] = argv[i + 1];
      i++;
    }
  }
  return res;
}
