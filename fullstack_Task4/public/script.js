document.querySelector('form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll('input');
  const name = inputs[0].value.trim();
  const email = inputs[1].value.trim();
  const message = inputs[2].value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  try {
    const response = await fetch('http://localhost:8081/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    const result = await response.json();
    alert(result.message);

    if (result.success) {
      inputs.forEach(input => input.value = '');
    }
  }
    catch (error) {
    alert('Failed to submit form. Please try again.');
    console.error(error);
  }
});
