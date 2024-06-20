export class MergeSort {
  constructor() {}

  merge(arr, l, m, r) {
    // get size
    let n1 = m - l + 1;
    let n2 = r - m;

    // temp arr
    const L = Array(n1);
    const R = Array(n2);

    // fill temp arr
    for (let i = 0; i < n1; i++) {
      L[i] = arr[l + i];
    }
    for (let j = 0; j < n2; j++) {
      R[j] = arr[m + 1 + j];
    }

    // init idxes
    let i = 0,
      j = 0;
    let k = l;

    // while
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    // remainders
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  sort(arr, l, r) {
    if (l < r) {
      // middle
      let m = Math.floor(l + (r - l) / 2);

      // sort 2 halves
      this.sort(arr, l, m);
      this.sort(arr, m + 1, r);

      // merge
      this.merge(arr, l, m, r);
    }
  }
}
