const mobileBtn = document.querySelector("#mobile-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const menuList = document.querySelector("#menuList")
const carrousel = document.querySelector("#carrousel")
const hourInfo = document.querySelector("#hourInfo")

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active")
  mobileBtn.classList.toggle("active")
})

const fetchMenuItems = async () => {
  const response = await fetch(
    "https://api.brchallenges.com/api/empire-burger/menu"
  )
  return response.json()
}

const fetchCommentSection = async () => {
  const response = await fetch(
    "https://api.brchallenges.com/api/empire-burger/testimonials"
  )
  return response.json()
}

const handleGenerateItems = (menuItems) =>
  menuItems
    .map(
      ({ plate, ingredients, price }) =>
        `
    <li>
      <h2 class="title"> 
          ${plate}.......................R$${price}
      </h2>
      <p>
          ${ingredients}
      </p>
  </li>
      `
    )
    .join("")

const handleComentList = (comments) =>
  comments
    .map(({ name, age, image, testimonial }) => {
      return ` 
     <div class="carrousel-content">
    <p class="line-clamp">
      ${testimonial}
    </p>
    <div class="corrousel-profile-content row">
        <div class="profile-image row">
            <img src="${image}" alt="Foto de perfil" class="profile-picture">
        </div>
        <div class="carrousel-name-age">
            <h3 class="title">${name}</h3>
            <span>${age} Anos • Designer</span>
        </div>
    </div>
</div>
    `
    })
    .join("")

const getHour = () => {
  const horas = new Date().getHours()
  changeBgoNTime(horas)
}

const changeBgoNTime = (time) => {
  if (time >= 17 && time <= 23) {
    hourInfo.style.backgroundColor = "var(--red);"
  } 
  hourInfo.style.backgroundColor = "var(--lightblack)"
 
}

const addItemnsIntoDOM = async () => {
  const menuItems = await fetchMenuItems()
  const template = handleGenerateItems(menuItems)

  const comentList = await fetchCommentSection()
  const comentTemplate = handleComentList(comentList)

  menuList.innerHTML += template
  carrousel.innerHTML += comentTemplate

  getHour()
}

addItemnsIntoDOM()
