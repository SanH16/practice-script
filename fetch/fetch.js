const endpoint = "https://reqres.in/api/users";

//  fetch api
// fetch(endpoint)
//   .then((result) => result.json())
//   .then(({ data }) => console.log(data));

// async function
const hitApi = async () => {
  const result = await fetch(endpoint);
  const { data } = await result.json();

  console.log(`fetch data result : ${data}`);

  data.forEach((user) => {
    const fetchElement = document.createElement("div");
    fetchElement.classList.add("users");

    const firstName = document.createElement("p");
    firstName.innerText = user.first_name;

    const lastName = document.createElement("span");
    lastName.innerText = ` ${user.last_name}`;
    lastName.style.color = "#BF3100";

    const emailElement = document.createElement("p");
    emailElement.innerText = user.email;
    emailElement.style.color = "#087E8B";
    emailElement.style.fontWeight = 500;

    fetchElement.appendChild(firstName);
    firstName.appendChild(lastName);
    fetchElement.appendChild(emailElement);

    document.getElementById("fetch-api").appendChild(fetchElement);
  });
};

hitApi();
