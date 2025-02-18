const subscribe = next => {
  const form = document.getElementById('addForm');
  const inputField = document.getElementById('value');

  form.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission
    const action = e.submitter.value;

    // Get the value from the input field
    const value = inputField.value.trim();
    console.log('addForm::action =>', action, ', submit value => "' + value + '"');

    // Check if the value is valid (non-empty)
    if (value || action === 'reverse') {
      next({action, value});
      inputField.value = '';
    }
  });
};

export { subscribe };
