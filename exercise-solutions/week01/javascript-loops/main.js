// 0 1 2 3 4 5 6 7 8 9 10
for (i = 0; i <= 10; i++) {
  console.log(i);
}

// 0 100 200 300 400 500 600 700 800 900 1000
for (i = 0; i <= 1000; i += 100) {
  console.log(i);
}

// 1 2 4 8 16 32 64 128
for (i = 1; i <= 128; i *= 2) {
  console.log(i);
}

// 0 2 4 6 8 10
for (i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 3 6 9 12 15
for (i = 3; i <= 15; i += 3) {
  console.log(i);
}

// 9 8 7 6 5 4 3 2 1 0
for (i = 9; i >= 0; i -= 1) {
  console.log(i);
}

// 1 1 1 2 2 2 3 3 3 4 4 4
for (i = 0; i < 12; i++) {
  console.log(Math.floor(i/3) + 1);
}

// or
for (i = 0; i <= 4; i++) {
  for (j = 0; j < 3; j++) {
      console.log(i);
  }
}

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (i = 0; i < 15; i++) {
  console.log(i%5);
}
