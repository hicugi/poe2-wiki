export const getFilePath = (val) => location.pathname + '/' + val;

export function compare(word1, word2) {
  const rLen = word2.length + 1;
  const cLen = word1.length + 1;
  const grid = Array.from({ length: rLen }, () => new Array(cLen).fill(0));

  for (let i = 0; i < rLen; i++) {
    grid[i][0] = i;
  }
  for (let i = 0; i < cLen; i++) {
    grid[0][i] = i;
  }

  for (let r = 1; r < rLen; r++) {
    for (let c = 1; c < cLen; c++) {
      grid[r][c] = Math.min(
        grid[r - 1][c - 1] + !(word2[r] == word1[c]),
        grid[r - 1][c] + 1,
        grid[r][c - 1] + 1,
      );
    }
  }

  return cLen - grid.at(-1).at(-1) === rLen;
}
