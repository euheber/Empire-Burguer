const mobileBtn = document.querySelector("#mobile-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const menuList = document.querySelector("#menuList")

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

const handleGenerateItems = menuItems =>  menuItems
.map(({ plate, ingredients, price }) =>

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
    ).join("")

const addMenuIntoList = async () => { 
    const items = await fetchMenuItems()
    const template = handleGenerateItems(items)
    menuList.innerHTML += template
}

addMenuIntoList()
