const accordianData = [
    {
      question: "What is Hood Goggins mode?",
      answer: "It's beast mode. No mercy. No excuses.",
    },
    {
      question: "How do I become rich?",
      answer: "Execute daily. Sell. Stack. Scale. Repeat.",
    },
    {
      question: "Can I use this with real APIs?",
      answer: "Hell yeah. Fetch it. Loop it. Inject it.",
    }
  ];
  
  const container = document.getElementById('accordian');
  
  accordianData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'bg-white p-4 border-b cursor-pointer';
  
    const header = document.createElement('div');
    header.textContent = item.question;
    header.className = 'font-semibold text-lg';
    header.dataset.index = index;
  
    const body = document.createElement('div');
    body.textContent = item.answer;
    body.className = 'accordian-body mt-2 text-gray-600';
    body.style.display = 'none';
  
    header.addEventListener('click', () => {
      const isVisible = body.style.display === 'block';
      // Close all
      document.querySelectorAll('.accordian-body').forEach(b => {
        b.style.display = 'none';
      });
      // Toggle current
      body.style.display = isVisible ? 'none' : 'block';
    });
  
    card.appendChild(header);
    card.appendChild(body);
    container.appendChild(card);
  });
  