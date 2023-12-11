function submitForm(){
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  if(name === '' || email=== '' || message ===''){
    document.getElementById('feedback').innerHTML = 'Please Fill out all fields.';
    return;
  }

  document.getElementById('feedback').innerHTML = 'Form submitted successfully!';
  document.getElementById('myForm').reset();
}