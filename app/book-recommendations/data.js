// app/book-recommendations/data.js
export const keywords = [
  "stock market books in hindi",
  "stock market books for beginners",
  "stock market books pdf",
  "indian stock market books pdf",
  "what is book value in stock market",
  "book value in stock market",
  "stock market books in hindi pdf",
  "best book to learn stock market",
  "best stock market books for beginners",
  "basic books for stock market",
  "basics of stock market books",
  "stock market books india",
  "stock market books in bengali",
  "stock market trading books",
  "top 5 stock market books for beginners",
  "best books on indian stock market",
  "stock market learning books",
  "stock market books in telugu",
  "best books on stock market investing",
  "top 10 books for stock market beginners",
  "best book for stock market beginners in india",
  "best book for trading in stock market",
  "best stock market books for beginners in india",
  "stock market books pdf free download",
  "stock market related books",
  "top stock market books",
  "what is profit booking in stock market",
]
export const slugify = s =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")

export const toTitleCase = s =>
  s.toLowerCase().split(" ").map(w => w[0]?.toUpperCase() + w.slice(1)).join(" ")
