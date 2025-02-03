const quotes = [
    "It takes courage to grow up and become who you really are. — E.E. Cummings",
    "All our dreams can come true, if we have the courage to pursue them. — Walt Disney",
    "Nothing is impossible. The word itself says 'I'm possible!' — Audrey Hepburn",
    "Keep your face always toward the sunshine, and shadows will fall behind you. — Walt Whitman",
    "Attitude is a little thing that makes a big difference.— Winston Churchill",
    ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  }
window.onload = generateQuote

