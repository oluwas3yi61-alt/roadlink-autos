function orderCar(carName){
  const email = "oluwas3yi61@gmail.com";
  const subject = "Car Order Request";
  const body = `Hello, I want to order the ${carName}. Please provide more details.`;

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
