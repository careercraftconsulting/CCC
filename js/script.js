console.log('Career Craft Consulting Website Loaded');
<script>
function sendToWhatsApp() {
  let name = document.querySelector('input[name="name"]').value;
  let phone = document.querySelector('input[name="phone"]').value;
  let email = document.querySelector('input[name="email"]').value;
  let course = document.querySelector('input[name="course"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  let whatsappMessage = `Hello Career Craft Consulting,%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Course: ${course}%0A
Message: ${message}`;

  let url = "https://wa.me/918925284555?text=" + whatsappMessage;

  window.open(url, '_blank');
}
</script>
